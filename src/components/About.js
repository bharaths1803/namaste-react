import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <h1>From Namaste REact</h1>
      <User name={"Bharath"} location={"Madurai"} />
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent class constructor");
//   }
//   render() {
//     console.log("Parent class render");
//     return (
//       <div>
//         <h1>About us page</h1>
//         <h1>From Namaste REact</h1>
//         <User name={"Bharath"} location={"Madurai"} />
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log("Parent class mount");
//   }
// }

export default About;
