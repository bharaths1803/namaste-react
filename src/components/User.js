import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchGithub = async () => {
      const res = await fetch("https://api.github.com/users/bharaths1803");
      const json = await res.json();
      setUserInfo(json);
    };

    fetchGithub();
  }, []);

  if (!userInfo) return <Shimmer />;
  const { login, avatar_url, location, public_repos } = userInfo;
  return (
    <div className="m-4 p-4 bg-pink-100 border border-solid border-black inline-block">
      <img alt="User Profile image" src={avatar_url} className="w-56" />
      <h1>Name: {login}</h1>
      <h2>Location: {public_repos}</h2>
      <h4>Contact: @bharaths1803</h4>
      <h4>Count: {count}</h4>
    </div>
  );
};

export default User;
