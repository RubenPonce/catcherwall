import { ContentWallContainer } from "./components/container/ContentWallContainer";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Cookies from "js-cookie";
import ViewerDiscretionModal from "./utils/ViewerDescretionModal";
import {useState} from "react";
function App() {
    const [isAdvised, setIsAdvised] = useState(Cookies.get("isAdvised"));

  return (
    <ApolloProvider client={client}>

      <div className="App">
          {isAdvised ? <ContentWallContainer /> : <ViewerDiscretionModal isAdvised={isAdvised} setIsAdvised={setIsAdvised} />}
              </div>

    </ApolloProvider>
  );
}

export default App;
