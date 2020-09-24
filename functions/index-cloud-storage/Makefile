.PHONY: deploy

deploy:
	gcloud functions deploy indexCloudStorage --trigger-resource wedding-kiosk --runtime nodejs10 --trigger-event google.storage.object.finalize --region=europe-west1