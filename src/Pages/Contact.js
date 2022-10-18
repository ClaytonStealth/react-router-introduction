import NavBar from "../Components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  // const redirectHandler = () => {
  //   navigate();
  // };
  return (
    <div>
      <NavBar />
      <h1>Contact</h1>
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
          if (
            email !== "" &&
            email.includes("@") === true &&
            lastName !== "" &&
            firstName !== ""
          ) {
            navigate("/");
          } else {
            alert("Please fill all the fields or check your email");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
