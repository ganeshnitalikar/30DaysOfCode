import React from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [display, setDisplay] = React.useState(false);
  const { user, login, logout } = React.useContext(UserContext);

  const handleSubmit = (e) => {
    if (username === "" || password === "") {
      window.alert("Please fill in all fields");
    } else {
      e.preventDefault();
      login(username, password);
      console.log(user);
      console.log(display);
      setDisplay(true);
    }
  };
  const handleLogout = () => {
    logout();
    setDisplay(false);
  };

  return (
    <div className="form-div">
      <h1>Login</h1>
      <form>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
      {/* <div className={display ? "showdiv" : "hiddendiv"}>
        <h2>Welcome {user.username}</h2>
        <p>Your password is {user.password}</p>
        <button onClick={handleLogout}>Logout</button>
      </div> */}
    </div>
  );
}

export default Login;
