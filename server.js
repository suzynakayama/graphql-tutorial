const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    // enable the usage of graphiql
    graphiql: true,
  })
);

app.listen("4000", () => console.log("Server running on port 4000"));
