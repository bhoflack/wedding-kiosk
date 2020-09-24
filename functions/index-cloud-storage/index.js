const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.indexCloudStorage = async (file, context) => {
    if (file.name.includes('thumb@')) {
        return;
    }
    const ref = db.collection('raw');

    await ref.add({
        bucket: file.bucket,
        name: file.name,
        createdAt: file.timeCreated,
    });
}