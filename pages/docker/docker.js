import Component from "../../js/core/component.js";

const docker = new Component(
  "article",
  "article",
  `
  <h1 id="title">Docker</h1>
  <h2 id='docker-compose'>Docker Compose</h2>
  <hr>
  Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.
  The big advantage of using Compose is you can define your application stack in a file, keep it at the root of your project repo (it’s now version controlled), and easily enable someone else to contribute to your project. Someone would only need to clone your repo and start the compose app. In fact, you might see quite a few projects on GitHub/GitLab doing exactly this now.
  <h3>Create the Compose file</h3>

  At the root of the app project, create a file named docker-compose.yml.

  In the compose file, we’ll start off by defining the list of services (or containers) we want to run as part of our application.

  <h3>Define the service</h3>

  <div dlang="sh" class='editor'>
  services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
  </div>  
  <h2 id='dockerfile'>Dockerfile</h2>
  <hr>
  Docker builds images automatically by reading the instructions from a <code>Dockerfile</code> - a text file that contains all commands, in order, needed to build a given image. A <code>Dockerfile</code> adheres to a specific format and set of instructions which you can find at Dockerfile reference.
  <h3>Dockerfile for a Go application</h3>
  <div dlang='sh' class='editor'>
  # syntax=docker/dockerfile:1
FROM golang:1.16-alpine AS build

# Install tools required for project
# Run docker build --no-cache . to update dependencies
RUN apk add --no-cache git
RUN go get github.com/golang/dep/cmd/dep

# List project dependencies with Gopkg.toml and Gopkg.lock
# These layers are only re-built when Gopkg files are updated
COPY Gopkg.lock Gopkg.toml /go/src/project/
WORKDIR /go/src/project/
# Install library dependencies
RUN dep ensure -vendor-only

# Copy the entire project and build it
# This layer is rebuilt when a file changes in the project directory
COPY . /go/src/project/
RUN go build -o /bin/project

# This results in a single layer image
FROM scratch
COPY --from=build /bin/project /bin/project
ENTRYPOINT ["/bin/project"]
CMD ["--help"]
  </div>

  `
);

export { docker };
