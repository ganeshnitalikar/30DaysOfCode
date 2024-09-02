import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
import "./App.css";

function App() {
  let userData = {
    username: "",
    password: "",
  };
  const [user, setUser] = React.useState(userData);

  const login = (username, password) => {
    userData = {
      username: username,
      password: password,
    };
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <div className="container">
        <h1>Context API Project</h1>
        <Login />
        <Profile></Profile>
      </div>
    </UserContext.Provider>
  );
}

export default App;
