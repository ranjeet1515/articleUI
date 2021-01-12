import React from "react";
import "./logout.css";

function Logout(props) {
  return (
    <div id="logout">
      <h2>Logout</h2>
      <h3>You have already logged out, Please login again</h3>
      <div>
        <a href="./login">Login</a>
      </div>
    </div>
  );
}

export default Logout;
