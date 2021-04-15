import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious {props.typeFood} around.</p>
      <img scr={restaurant} height={200} alt="a photo"/>
      <ul style={{textAlign: "left"}}>
       { /* Step 2: display it */ }
       { /* Vamos a usar la i y key para meter al vector en sync de nuevo pero no lo recomiendan */ }
       { /* Asi que convertiremos el vector en objeto */ }
      {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      {/* dishes.map((dish, i) => <li key={i}>{dish}</li> */};

      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with Vegetables","Minestrone"];

//convertimos en objetos un vector
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
console.log(dishObjects);

// make the data avaible for the component

// IMPORTANT: quotes are only for strings

function App() {
  return (
    <div className="App">
      <Header name="Anita" />
    { /* Step 1: add the property */ }
    { /* How we are working with a variable we put it in curly brackets */ }
      <Main typeFood="macaroni" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

// key def: ID that helps keep everything in sync.