import express from "express";
import graphqlHTTP from "express-graphql";
import { graphql, buildSchema } from "graphql";

// Construct schema using graphql schema lang
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello, world!';
    }
};

// Run the graphql query { hello } and print out the response
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});