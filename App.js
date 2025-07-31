// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello from react Js");
// console.log("Heading", heading)

const parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "I'm child1 parent from h1"),
    React.createElement("h2", {}, "I'm child1 parent from h2")
  ]),
  React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "I'm child2 parent from h1"),
    React.createElement("h2", {}, "I'm child2 parent from h2")
  ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);