import React from "react";
import NavBar from "./component/route/NavBar";
import AppRouter from "./component/route/Router";
import UserList from "./component/user/UserList";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
