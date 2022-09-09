const express = require("express");
const cors = require("cors");

const { graphqlResolver } = require("./graphqlResolver");

const app = express();

console.log(graphqlResolver);

app.use("/graphql", cors(), graphqlResolver);

app.listen(3000, () => {
  console.log("Server is running...");
});
