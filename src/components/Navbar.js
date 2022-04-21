import React from "react";
import { FaCoins } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/axio_api_project_crypto" >
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Raj <span className="purple">Crypto Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
