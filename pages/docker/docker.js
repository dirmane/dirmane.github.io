const docker = {
  article: document.createElement("article"),
  ft: document.createElement("ft"),
};

docker.article.innerHTML = `
      <h1 id="title">Docker</h1>
      <div class='editor' dlang="sh">function foo(items) {
      
# -i
# -t
# running in pipelines without -t
$ docker run --user $(id -u):$(id -g) -i image_name command args
$ CURRENT_UID=$(id -u):$(id -g) docker-compose up

docker history --format "\t{{.Size}}\t\t{{.CreatedBy}}" 1de239ccac3e --no-trunc

# determine docker resources usage
docker system df

# determine image size
docker system df -v | grep 695ab6fa12ce
    # to get IMAGE ID
    docker images | grep cypress/included

docker image prune -a --force --filter "until=480h"
docker system prune --all --volumes --force
    # from: https://docs.docker.com/config/pruning/
    # even more: https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
docker volume prune
  # pruning just volumes

# print entrypoint of an image:
docker inspect IMAGENAME | jq '.[0].ContainerConfig.Entrypoint[0]' -r
docker image inspect IMAGENAME | jq '.[].Config.WorkingDir'

docker container rm puppeteer-test -f
    # stop and remove container immediately

DOCKER_BUILDKIT=1 docker build . --platform linux/amd64 -f docker/Dockerfile -t xxx:latest
    # https://github.com/docker/docker.github.io/issues/12231
# passing env as is
$ CYPRESS_VIDEO=false
$ docker run --name name --rm -d -it -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO -e "PORT=8089" -p "8089:8089" --entrypoint="" cypress/included:3.2.0 node -v

host.docker.internal
    # from: https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds
    g(Networking features in Docker Desktop for Mac Use cases and workarounds I WANT TO CONNECT FROM A CONTAINER TO A SERVICE ON THE HOST)
    # on linux you can use:
        https://stackoverflow.com/a/48547074

docker login https://docker-registry.xxx.com --username=yourhubusername --password=yourpassword

# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#build-an-image-using-a-dockerfile-from-stdin-without-sending-build-context
# inline Dockerfile
cat <<EOF | docker build --rm -t local_c7_systemd -
FROM centos:7
...
EOF

docker run --rm -it local_c7_systemd bash

# pushing image
# nvm ls-remote
docker run -it privaterepo.com/node:13.14.0-alpine sh
docker pull node:13.14.0-alpine
docker tag node:13.14.0-alpine privaterepo.com/node:13.14.0-alpine
docker push privaterepo.com/node:13.14.0-alpine

# run inline bash script in container
# to run pod without stopping
docker run -i --name test --rm -d alpine:3.14.2 tail -f /dev/null
# then run script
cat <<EOF | docker exec -i test /bin/sh
echo a b c | awk '{print \$2}'
EOF
# or run as run straight away
cat <<EOF | docker run -i --name test --rm alpine:3.14.2 /bin/sh
echo a b c | awk '{print \$2}'
EOF

cat <<EOF | docker build --progress=plain -t project:node-multi_tl -
FROM node:14.17.4-alpine AS base_stage
RUN apk --no-cache add curl
RUN apk update && apk upgrade && apk add curl
ENV TEST_ENV="test..."
ENTRYPOINT ["tail", "-f", "/dev/null"]
EOF
docker run -it project:node-multi_tl
# if you need to restrict amount of memory or CPU power the
# container can use, see
# https://docs.docker.com/config/containers/resource_constraints/
# restrict total memory
# --memory=600m --memory-swap=600m
# restrict CPU share
# --cpus=0.3

# checking healthcheck of container
docker inspect --format "{{json .State.Health }}" cypress_app_container | jq
# example of healtheck section in docker-compose (using 0s will not work for interval nor start_period, use 1s instead):
  healthcheck: # https://docs.docker.com/compose/compose-file/compose-file-v3/#healthcheck ANS https://docs.docker.com/engine/reference/builder/#healthcheck
    test: ["CMD", "node", "healthcheck.js"]
    start_period: 1s
    interval: 1s
    timeout: 5s
    retries: 3

docker inspect cypress_app | grep -A 5 -B 5 RestartPolicy
  # based on https://docs.docker.com/config/containers/start-containers-automatically/

      }</div>
      `;
docker.ft.innerHTML = "<li>Usefull commands</li>";

export { docker };
