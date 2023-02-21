import "./App.css";
import Form from "./Form";
import { FaReact } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <p className="title">
        {" "}
        <GiFullPizza className="pizza-icon" /> Pizza Form in React{" "}
        <FaReact className="react-icon" />
      </p>
      <Form />
      <a href="https://react-portfolio-lauren-powers.netlify.app/features">
        <button className="button-54">Back to Lil' Portfolio</button>
      </a>
    </div>
  );
}

export default App;
