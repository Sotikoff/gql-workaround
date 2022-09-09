import ReactDOM from "react-dom";
import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  const { loading, data } = useQuery(gql`
    query Query {
      article {
        title
        author
        text
        publishedAt
      }
    }
  `);

  if (loading || !data) {
    return <h2>Loading...</h2>;
  }

  const { article } = data;

  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <h3>{new Date(article.publishedAt).toLocaleDateString()}</h3>
      <p>{article.text}</p>
    </div>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
