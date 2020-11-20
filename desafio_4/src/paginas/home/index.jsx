import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/cadastro">Home cadastro</Link>
        </li>
        <li>
          <Link to="/login">Home Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
