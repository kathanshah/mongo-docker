# mongo-docker
docker run --name mongo-logs -d -v /home/kathan/mongo-data:/data/db -p 27020:27020 tullyapps/mongo-logs


docker run -it --rm \
    --name mongo-express \
    -p 8081:8081 \
    -e ME_CONFIG_MONGODB_ENABLE_ADMIN=false \
    -e ME_CONFIG_OPTIONS_EDITORTHEME="default" \
    -e ME_CONFIG_BASICAUTH_USERNAME="user" \
    -e ME_CONFIG_BASICAUTH_PASSWORD="testing" \
    -e ME_CONFIG_MONGODB_PORT=27020 \
    -e ME_CONFIG_MONGODB_SERVER="172.20.0.1" \
    -e ME_CONFIG_MONGODB_AUTH_DATABASE="logs" \
    -e ME_CONFIG_MONGODB_AUTH_USERNAME="username"\
    -e ME_CONFIG_MONGODB_AUTH_PASSWORD="logs" \
    mongo-express