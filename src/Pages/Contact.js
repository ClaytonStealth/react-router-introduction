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
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
          console.log(firstName);
        }}
      />
      <br />
      <input
        placeholder="Last Name"
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          console.log(lastName);
        }}
      />
      <br />
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
      <br />
      <button
        onClick={() => {
          if (lastName === "" || firstName === "") {
            setErrorMessage("Please verify your name");
            return;
          }

          if (email === "" || email.includes("@") !== true) {
            setErrorMessage("Please verify your email");
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
