import logo from "./logo.svg";
import "./App.css";
import { ContentWallContainer } from "./components/container/ContentWallContainer";
import { Navbar } from "./components/container/Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ContentWallContainer />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
