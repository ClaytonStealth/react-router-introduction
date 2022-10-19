import userEvent from "@testing-library/user-event";
import { useOutletContext, useParams } from "react-router-dom";
const SignupCard = () => {
  const params = useParams();
  const [signupList] = useOutletContext();
  const foundSignup = signupList.find((signup) => {
    return signup.email === params.email;
  });
  return (
    <div>
      {foundSignup && <p>{foundSignup.firstName}</p>}
      {foundSignup && <p>{foundSignup.lastName}</p>}
      {foundSignup && <p>{foundSignup.email}</p>}
    </div>
  );
};

export default SignupCard;
