import { useState } from "react";
import WelcomePage from "./WelcomePage";
import SignUp from "./SignUp";

const LoginSign = () => {
  let [index, setIndex] = useState(0);

  if (index === 0) return <WelcomePage setIndex={setIndex} />;
  if (index === 1) return <SignUp setIndex={setIndex} />;
  if (index === 2) return <WelcomePage setIndex={setIndex} />;
};

export default LoginSign;
