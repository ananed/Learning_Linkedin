import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

//function SecretComponent(){
// return <h1>Secret information fro authorized users only</h1>;
//}

//function RegularComponent(){
//return <h1>Everyone can see this component</h1>
//}

//function App2({authorized}) {
//return(
// <div>
//{authorized ? <SecretComponent />  : <RegularComponent />}
// </div>
//);
//}

function App() {
  //const [emotion, setEmotion] = useState("happy");
  // console.log(emotion);
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`Its ${emotion} around here!`);
  //  }, [emotion]);

  //  useEffect(() =>{
  //      console.log(`Its ${secondary} around here!`);
  //  }, [secondary]);

  const [checked, toggle] = useReducer((checked) => !checked, false);

  //const [checked, setChecked] = useState(false);
  //function toggle() {
  // setChecked((checked) => !checked);
  // }

  return (
    <div>
      {/* <h1>Current emotion is {emotion} and {secondary}.</h1> */}
      {/* <button onClick={() => setEmotion("frustrated")}>Make frustrate.</button> */}
      {/* <button onClick={() => setSecondary("crabby")}>Make crabby.</button> */}

      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}
// onChange={() => setChecked((checked) => !checked)}
export default App;
