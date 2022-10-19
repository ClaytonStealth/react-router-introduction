import { Outlet, useOutletContext } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";

const App = () => {
  const [signupList, setSignupList] = useState([]);
  const handleAddSignup = (firstName, lastName, email) => {
    const newSignup = {
      firstName,
      lastName,
      email,
    };
    const signupListcopy = [...signupList, newSignup];
    setSignupList(signupListcopy);
  };
  console.log(signupList);
  return (
    <div className='App-header'>
      <NavBar />
      <Outlet context={[signupList, handleAddSignup]} />
    </div>
  );
};

export default App;
