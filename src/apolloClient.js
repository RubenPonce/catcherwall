import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  split,
} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/client/link/ws";
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `${process.env.REACT_APP_WS_URL}/graphql`},{
    reconnect: true,
});


const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
  link: ApolloLink.from([splitLink]),
  cache: new InMemoryCache(),
});
export default client;
