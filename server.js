var { graphql, buildSchema } = require("graphql");

// Construct schema using graphql schema lang
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello, world!';
    }
};

// Run the graphql query { hello } and print out the response
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});