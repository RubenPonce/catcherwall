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
      </header>
    </div>
  );
}

export default App;
