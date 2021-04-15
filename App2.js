import React from "react";
import "./App.css";

function SecretComponent(){
    return <h1>Secret information fro authorized users only</h1>;
}

function RegularComponent(){
    return <h1>Everyone can see this component</h1>
}

function App2(props) {
  return(
      <div>
      {props.authorized ? <SecretComponent />  : <RegularComponent />}
      </div>
  );
}

export default App2;

