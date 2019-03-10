# express-graphql-tutorial
Learning the basics of GraphQL

## Running the project
To run this project, download the code. Change to the root dir, and run ```node start.js```. The reason we run start.js instead of server.js is so that babel can transpile the es6 code for node to run it successfully.
Once the server is running, visit ```localhost:4000/graphql```. Since graphiql is true you will be presented with a GUI for testing the endpoint.
You can also test the code from the terminal by running the following 
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
```
