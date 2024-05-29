import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreFront from "./Components/OnlineStore/StoreFront";
import SearchText from "./Components/SearchComponent/SearchText";
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  if (LoggedIn) {
    return (
      <>
        <div>
          <StoreFront />
          <button className="btn btn-danger" onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
        <div>
          <SearchText></SearchText>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Please Login</h2>
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );
}
export default App;
