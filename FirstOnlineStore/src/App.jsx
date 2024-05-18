import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreFront from "./StoreFront";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  if (LoggedIn) {
    return (
      <>
        <StoreFront />
        <button className="btn btn-danger" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
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
