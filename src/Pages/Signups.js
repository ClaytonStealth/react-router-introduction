import { useOutletContext, useNavigate, Outlet } from "react-router-dom";
const Signups = () => {
  const navigate = useNavigate();
  const [signupList] = useOutletContext();
  return (
    <div>
      <h1>Sign Up</h1>
      <select
        onChange={(e) => {
          navigate(`/signups/${e.target.value}`);
        }}
      >
        {signupList.map((signup) => {
          return <option value={signup.email}>{signup.firstName}</option>;
        })}
        <option></option>
      </select>
      <Outlet context={[signupList]} />
    </div>
  );
};

export default Signups;
