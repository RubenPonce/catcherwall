import logo from "./logo.svg";
import "./App.css";
import { ContentWallContainer } from "./components/container/ContentWallContainer";
import { Navbar } from "./components/container/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ContentWallContainer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
