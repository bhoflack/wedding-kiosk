const sharp = require('sharp');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const admin = require('firebase-admin');
admin.initializeApp();

const tmp = require('tmp');

const db = admin.firestore();


exports.resize = async (event) => {

      console.log(`got event ${JSON.stringify(event)}`);
      const nameParts = event.value.name.split('/');
      const id = nameParts[nameParts.length - 1];



      const bucketName = event.value.fields.bucket.stringValue;
      const objectName = event.value.fields.name.stringValue;
      const createdAt = event.value.fields.createdAt.stringValue;

      if (objectName.includes('thumb@')) {
        return;
    }

      const tmpFile = tmp.fileSync();
      const thumbFile = tmp.fileSync();

      await storage.bucket(bucketName).file(objectName).download({
        destination: tmpFile.name,
      });
      await sharp(tmpFile.name).resize(64).toFile(thumbFile.name);

      const thumbName = `thumb@64_${objectName}`;
      await storage.bucket(bucketName).upload(
          thumbFile.name,
          { destination: thumbName, },
      );

      tmpFile.removeCallback();
      thumbFile.removeCallback();

      await db.collection('processed').add({
        bucket: bucketName,
        createdAt: createdAt,
        name: objectName,
        thumb: thumbName,
    });
      await db.collection('raw').doc(id).delete();
  }