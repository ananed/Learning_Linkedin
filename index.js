import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function AppTwo() {
// return <h1>This is the Second App</h1>;
// }

//si pongo [] solo me dara el valor del primer elemento

//if I put second and coma, he gave me the second too

// const [mostImportantItem, second] = ["boots", "tents", "headlamp"];
// console.log(mostImportantItem, second);

// const [,, light] = ["boots", "tents", "headlamp"];
// console.log(light);
ReactDOM.render(<App2 authorized={true} />, document.getElementById("root"));

// Si no quiero añadir todo el rato <div> para agregar elementos, uso React.Fragment
