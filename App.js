const h1Element = React.createElement(
  "h1",
  { id: "hlElement" },
  "Hello World in React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1Element);