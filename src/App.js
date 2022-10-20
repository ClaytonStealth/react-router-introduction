import { Outlet, useOutletContext } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";

const App = () => {
  const [signupList, setSignupList] = useState([]);
  //taking in first/last/email from the form and making a new variable to take in the new stuff and then add it to signupListcopy and then setSignupList to the signupList using the copy
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
      {/*navbar is the top of the page with the links to the different pages/ outlet passing the context of the list and the function to get new signups for pages/components to use.*/}
      <Outlet context={[signupList, handleAddSignup]} />
    </div>
  );
};

export default App;
