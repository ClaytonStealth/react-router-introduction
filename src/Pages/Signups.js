import { useOutletContext, useNavigate } from "react-router-dom";
const Signups = () => {
  const navigate = useNavigate();
  const [signupList] = useOutletContext();
  return (
    <div>
      <h1>Sign Up</h1>
      <select>
        {signupList.map((signup) => {
          return <option value={signup.email}>{signup.firstName}</option>;
        })}
        <option></option>
      </select>
    </div>
  );
};

export default Signups;
