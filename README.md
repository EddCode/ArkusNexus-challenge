# ArkusNexus challenge

## Prerequisits
- Node.js
- Docker (optional)
- Docker compose (optional)

## Configuration

1. Install the dependencies for the frontend and backend
> Use any package manager do you want.

```
    $ cd Client
    $ pnpm install
```

```
    $ cd API
    $ pnpm install
```

> This will start the frontend development server at *http://localhost:8080*
> This will start the backend server at *http://localhost:3000*


3. Configure the MongoDB database

- Make sure you have a running MongoDB instance. You can install MongoDB locally or use a cloud service.
- Update the database connection configuration in the copying the env vars from `API/.env.sample` to `API/.env` file.

## Execution without Docker

1. Make sure you have Docker installed and running
2. Build the Docker image in `/API` and `Client` folder
    ```
        $ cd API
        $ docker build -t my-api .
        $ docker run -p 8080:8080 -e MONGODB_URI=<mongodb-uri> my-api
        $ cd Client
        $ docker build -t my-web-application
        $ docker run -p 3000:3000  my-web-application
    ```
    Replace <mongodb-uri> with the connection URI for your MongoDB instance.
4. Open your browser and navigate to http://localhost:3000 to see the web application in action.

## Execution with Docker Compose
1. Make sure you have Docker and Docker Compose installed and running.
2. Build and start the containers using Docker Compose:
    ```
        $ docker-compose --env-file=API/.env up -d
    ```
3. This will build and start the frontend and backend containers defined in the docker-compose.yml file.
4. Open your browser and navigate to http://localhost:8080 to see the web application in action.

> Docker compose file configuration is 3.7 to know more about it see []([[aasdf]])[Docker compose file] (https://runebook.dev/es/docs/docker/compose/compose-file/compose-versioning/index#version-3)

## Contributing

If you would like to contribute to this project, please follow these steps

1. Create a fork of the repository
2. Create a new branch for your feature or bug fix: git checkout -b feature/new-feature or git checkout -b bugfix/fix-error
3. Make the necessary changes and commit your changes: git commit -m "Add new feature" or git commit -m "Fix error"
4. Push your branch to your fork: git push origin feature/new-feature
5. Open a Pull Request on GitHub and describe the changes you have made


