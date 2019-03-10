import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

// Construct schema using graphql schema lang
const schema = buildSchema(`
    type Query {
        hello: String
        rollDice(numDice: Int!, numSides: Int) : [Int]
    }
`);

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello, world!';
    },
    rollDice: ({numDice, numSides}) => {
        let output = [];
        for (let i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * numSides || 6));
        }
        return output;
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