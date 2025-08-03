import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../context/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => {
  const [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cart = useSelector((store) => store.cart);

  const { loggedinUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.eyFnutyvj4Pu_a5YsSfvfQHaEp?pid=Api&P=0&h=180"
          className="w-56"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/grocery"}>Grocerys</Link>
          </li>
          <li className="px-3">
            <Link to={"/cart"}>Cart ({cart?.items?.length} items)</Link>
          </li>
          <button onClick={() => setBtn("Logout")} className="login-btn">
            {btn}
          </button>
          <li className="px-2">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
