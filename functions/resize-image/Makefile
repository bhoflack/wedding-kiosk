.PHONY: deploy

deploy:
	gcloud functions deploy resize --runtime nodejs10 --trigger-event providers/cloud.firestore/eventTypes/document.write --trigger-resource projects/kiosk-290416/databases/\(default\)/documents/raw/{name} --region=europe-west1