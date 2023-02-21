import "./App.css";
import Form from "./Form";
import { FaReact } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
// import pizzaangel from "./pizza-angel.png";

function App() {
  return (
    <div className="App">
      {/* <img src={pizzaangel} className="pizza-angel" /> */}
      <div>
        <p className="title">
          {" "}
          <GiFullPizza className="pizza-icon" /> Pizza Form in React{" "}
          <FaReact className="react-icon" />
        </p>
      </div>
      <Form />
      <a href="https://react-portfolio-lauren-powers.netlify.app/features">
        <button className="button-54">Back to Lil' Portfolio</button>
      </a>
    </div>
  );
}

export default App;
