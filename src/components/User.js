import React, { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h4>Contact: @bharaths1803</h4>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h4>{count2}</h4>
    </div>
  );
};

export default User;
