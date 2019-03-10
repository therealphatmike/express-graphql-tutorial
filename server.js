// import express from "express";
// import graphqlHTTP from "express-graphql";
// import buildSchema from "graphql";
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

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

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000);

console.log('Running graphQL API on localhost:4000/graphql');