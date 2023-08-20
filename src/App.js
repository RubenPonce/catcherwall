import { ContentWallContainer } from "./components/container/ContentWallContainer";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <h1 className="header-1">CatcherTV: All Things Predator Catching!</h1>
          <ContentWallContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
