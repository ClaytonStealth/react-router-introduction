import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // const redirectHandler = () => {
  //   navigate();
  // };
  return (
    <div>
      <NavBar />
      <h1>Contact</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        type='text'
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
          console.log(firstName);
        }}
      />
      firstName
      <br />
      <input
        type='text'
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          console.log(lastName);
        }}
      />
      lastName
      <br />
      <input
        type='text'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
      email
      <br />
      <button
        onClick={() => {
          if (email === "" || email.includes("@") !== true) {
            setErrorMessage("Please verify your email");
            return;
          }
          if (lastName === "" || firstName === "") {
            setErrorMessage("Please verify your name");
            return;
          }

          navigate("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
