import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AppTwo() {
  return <h1>This is the Second App</h1>;
}

ReactDOM.render(
    <App2 authorized={true} />,
  document.getElementById("root")
);

// Si no quiero añadir todo el rato <div> para agregar elementos, uso React.Fragment