import React, { useReducer } from "react";
import "./App.css";

// https://api.github.com/users/ananed

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

function App2({login}) {
  //const [emotion, setEmotion] = useState("happy");
  // console.log(emotion);
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`Its ${emotion} around here!`);
  //  }, [emotion]);

  //  useEffect(() =>{
  //      console.log(`Its ${secondary} around here!`);
  //  }, [secondary]);

  // const [checked, toggle] = useReducer((checked) => !checked, false);

  //const [checked, setChecked] = useState(false);
  //function toggle() {
  // setChecked((checked) => !checked);
  // }
const [data, setData] = useState(null);
const [loading, setLoading] = useState(null);
const [error, setError] = useState(null);
//first argument is a function
//second argument is when
useEffect(() => {
  if (!login) return setLoading(true);
   fetch(`https://api.github.com/users/${login}`)
   .then((response) => response.json())
   .then(setData)
   .then(() => setLoading(false))
   .catch(setError);
}, [login]);

if (loading) return <h1>Loading...</h1>
if (error)
   return <pre>{JSON.stringify(error, null, 2)}</pre>;
if (!data) return null;
if (data){
    // return <div>{JSON.stringify(data)}</div>;
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
      </div>);
}else{
return <div>No User Avaible</div>
}

  // return (
    //<div>
      // <h1>Current emotion is {emotion} and {secondary}.</h1> 
      // <button onClick={() => setEmotion("frustrated")}>Make frustrate.</button> 
      // <button onClick={() => setSecondary("crabby")}>Make crabby.</button> 
      // <input type="checkbox" value={checked} onChange={toggle} /> 
      // <p>{checked ? "checked" : "not checked"}</p> */}

   // </div>
 // );
// }
// onChange={() => setChecked((checked) => !checked)}
}
export default App2;
