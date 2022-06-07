import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import {onError} from  '@apollo/client'

//catching graphql errors
const errorLink = onError(({graphqlErrors,networkError}) =>{
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) =>{
      alert(`Graphql erro ${message, location,path}`);
    });
  }
  else if(networkError){
    networkError.map(({message}) =>{
      alert(`Network error ${message}`);
    });
  }
})




function App() {
  return <div className="App"></div>;
}

export default App;
