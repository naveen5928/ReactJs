import { useState } from "react";

import StoreFront from "./StoreFront";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  if (LoggedIn) {
    return (
      <>
        <StoreFront />
        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
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
