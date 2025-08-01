import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.eyFnutyvj4Pu_a5YsSfvfQHaEp?pid=Api&P=0&h=180"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => setBtn("Logout")} className="login-btn">
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
