import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello from react Js");
// console.log("Heading", heading)

const heading = React.createElement("h1", {}, "I'm child1 parent from h1");


const jsxHeading = <h1 id="heading">I'm child1 parent from h1 and from jsx</h1>;

const TitleCompoent = () => <h2 id="title">I'm from titleCompoent</h2>

const HeadingComponent = () => {
  return <div className="container">
      <h1 id="heading">I'm child1 parent from h1 and from jsx Heading</h1>
      {heading}
      {TitleCompoent()}
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);