import { useOutletContext, useNavigate, Outlet } from "react-router-dom";
const Signups = () => {
  const navigate = useNavigate();
  const [signupList] =
    useOutletContext(); /* signupList is an array of all the signups and its now being able to be seen from App.js using outletContext */
  return (
    <div>
      <h1>Sign Up</h1>
      <select
        onChange={(e) => {
          navigate(`/signups/${e.target.value}`);
        }}
      >
        {/* This is the dropdown menu that will allow the user to select a specific signup and see the details of that signup. thats being mapped from signupList and returning an option with the information of the signup. */}
        {signupList.map((signup, index) => {
          return (
            <option key={index} value={signup.email}>
              {signup.firstName}
            </option>
          );
        })}
        <option></option>
      </select>
      <Outlet context={[signupList]} />{" "}
      {/*outlet that lets us see the signups in signupList...pass it as a context to be used in other files*/}
    </div>
  );
};

export default Signups;
