.PHONY: deploy

deploy:
	cd functions/index-cloud-storage && $(MAKE) deploy
	cd functions/resize-image && $(MAKE) deploy
	cd kiosk-gallery && $(MAKE) deploy