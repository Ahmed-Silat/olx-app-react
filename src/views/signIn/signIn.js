import { useState } from "react";
import { login } from "../../config/firebase";

function Signin(props) {
  const [userInfo, setUserInfo] = useState({});

  const goToSignup = () => {
    props.setComponentName("signup");
  };

  const signin = () => {
    const { email, password } = userInfo;

    login(email, password);
    props.setComponentName("dashboard");
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  return (
    <div style={{ background: "gray", height: 300, width: 300 }}>
      <h1>Login</h1>

      <input
        type={"email"}
        onChange={(e) => updateForm(e, "email")}
        placeholder="Email"
      />
      <input
        type={"password"}
        onChange={(e) => updateForm(e, "password")}
        placeholder="Password"
      />
      <br />
      <button onClick={signin}>Login</button>
      <button onClick={goToSignup}>Go To Signup</button>
    </div>
  );
}
export default Signin;
