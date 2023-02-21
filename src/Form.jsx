import React, { useState } from "react";
import { send } from "emailjs-com";
import LoadingSpinner from "./LoadingSpinner";
import { GiPizzaSlice } from "react-icons/gi";

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toSend, setToSend] = useState({
    name: "",
    message: "",
    email: "",
    answer: "",
    comments: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send("service_1vhbumn", "template_zs8n08f", toSend, "2PPJhR_N0_MQXbpru")
      .then((response) => {
        setIsLoading(false);
        setMessage("Thanks for your answer!");
        console.log("SUCCESS!", response.status, response.text);
      })

      .catch((err) => {
        console.log("FAILED...", err);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={toSend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your e-mail"
            value={toSend.email}
            onChange={handleChange}
          />
          <label htmlFor="answer">What's the best pizza?</label>
          <select
            name="answer"
            onChange={handleChange}
            defaultValue={toSend.answer}
          >
            <option value="">--Please choose an option--</option>
            <option value={"Square"}>Square</option>
            <option value={"Triangle"}>Triangle</option>
            <option value={"Circle"}>Personal Circle of deliciousness</option>
          </select>
          <input
            type="text"
            name="message"
            placeholder="Favorite Pizzeria?"
            value={toSend.message}
            onChange={handleChange}
          />{" "}
          <textarea
            type="text"
            name="comments"
            className="form-comments"
            placeholder="Pizza thoughts?"
            value={toSend.comments}
            onChange={handleChange}
          />
          <div className="form-spinner">
            {isLoading ? <LoadingSpinner /> : null}
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            SUBMIT <GiPizzaSlice />
          </button>
          <div className="message">{message ? <h2>{message}</h2> : null}</div>
        </form>
      </div>
    </>
  );
}

export default Form;
