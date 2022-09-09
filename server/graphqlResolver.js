const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const article = require("./article.json");

const schema = buildSchema(`
  type Source {
    name: String
    code: String
  }
  type Article {
    id: String
    title: String
    text: String
    publishedAt: String
    source: Source
    author: String
  }  
  type Query {
    article: Article
  }
`);

const rootValue = {
  article() {
    return article;
  },
};

exports.graphqlResolver = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
