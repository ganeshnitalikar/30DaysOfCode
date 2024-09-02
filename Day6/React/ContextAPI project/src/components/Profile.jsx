import React, { useEffect } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = React.useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="profilediv">
      <h1>Profile</h1>
      <p>Username: {user.username} </p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;
