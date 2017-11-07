
#Start docker container for testing purposes

sudo docker run -d \
	--name mongo-test \
	--restart unless-stopped \
	-p 27017:27017 \
	--log-driver json-file \
	--log-opt max-size=10M \
	--log-opt max-file=10 \
	mongo:3.4

sudo docker inspect -f {{.LogPath}} mongo-test

