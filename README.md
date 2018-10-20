# exploratory-api 
An express server with a basic user api and authentication controller using JSON Web Tokens for simplicity sake. It's designed to be expanded on as a mock service for testing with other projects here.

There's a [hosted example](http://angular-exploratory-api.herokuapp.com/) for user by hosted apps.

## Getting Started
Clone this project and install dependencies.
Install node_modules

	npm i

Start the server

	node server
## CI
On successful merge into the **dev** branch a deployment is triggered on [Travis CI](https://travisci.org) and the app is deployed to [Heroku](https://www.heroku.com) where it is hosted.