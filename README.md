# TheMovieDB Web App

**TheMovieDB Web App** is a web application created with a frontend **SPA** (Single Page Application) using **Vue.js** with a web-components architecture and Flux with **Vuex**. In the backend, a RESFul API created using **Node.js** with **Typescript**.

## Running the application

* To run the application, you must first have Node.js installed. Recommended version 10.15.X.

* Install the ** yarn ** library as a globally library

``npm –g install yarn``

* Download the project in the development branch

* Access the project folder

* Configure a new .env file based on the .env.example file

```env
APP_TITLE=TheMovieDB Web App         # Application title
APP_NAME=themoviedb-web-app          # Application name
APP_DEBUG=false                      # Enable application debug
APP_PORT=3000                        # Port that the server will run
APP_HOST=http://localhost            # Server host. If it is used for external access, inform the external IP of the server.

PROXY_PORT=                          # Must be informed if using reverse proxy

NODE_ENV=production                  # Informs which environment the application is running production or development

TMDB_API_KEY=                        # API KEY da API TheMovieDB
```
* Install the libraries

`` yarn install ``

### Run application in development environment

* Run the backend and frontend application

`` yarn dev ``

### Run application in production environment

* First, compile the backend and frontend applications

``yarn build``

* Run the application in production

``yarn start``

### Running API tests

`` yarn test ``

## Third-party libraries

* **axios**: Library used to create frontend requests to the backend server and also used for the server to obtain the information from the movies of The Movie Database (TMDb) API.
* **compression**: Returns the response of the compressed requests.
* **cors**: Enables access to client requests in the server API.
* **dotenv**: Library used to read .env configuration files.
* **express**: Framework web to work with Node.js.
* **helmet**: Library used to enable security settings in each express.js request.
* **module-alias**: Creates a alias to make it easier to import Node.js. server modules.
* **moment**: Library used to format the release date of the movies. Converts "YYY-MM-DD" to "dddd, MMMM Do YYYY". For example "2019-05-16" for "Thursday, May 16th 2019".
* **morgan**: Creates log requests to the server.
* **validate.js**: Library used for validation of request parameters.
* **chai**: Library used to validate the answers obtained in the tests
* **concurrently**: Run npm scripts asynchronously on both Windows and Linux
* **cross-env**: Defines environment variables for both Windows and Linux.
* **mocha**: Library for running tests with Node.js
* **nodemon**: Run the server autoload when there are changes in the source code. Used in development enviroment.
* **ts-node**: Executes typescript code without need compilation.
* **tslint**: Code standardization with Typescript
* **tslint-microsoft-contrib**: Additional rules for code standardization  with Typescript.
* **typescript**: Library for the compilation of the typescript code.
* **vue**: Main javascript framework used in the frontend.
* **vue-router**: Route management in SPA applications (Single Page Application).
* **vuetify**: Vue.js Material Component Framework.
* **vuex**: Library for the use of the Flux architecture with Vue.js.
* **eslint**: Used for code standardization in the frontend with javascript.
* **stylus**: CSS pre-processor.

## Example

http://157.230.82.232/
