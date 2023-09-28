import { ContentWallContainer } from "./components/container/ContentWallContainer";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <ContentWallContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
