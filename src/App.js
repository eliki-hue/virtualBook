import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetBooks from "./components/APIFetch";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

//connecting the Ello API
const link = from([
  errorLink,
  new HttpLink({
    uri: "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql",
  }),
]);

//initializing apolloClient instance

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetBooks />
    </ApolloProvider>
  );
}

export default App;
