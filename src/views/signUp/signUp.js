import { useState } from "react";
import { signUp } from "../../config/firebase";

function Signup(props) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    props.setComponentName("signin");
  };

  const signup = async () => {
    setLoading(true);
    try {
      var result = await signUp(userInfo);
      props.setComponentName("dashboard");
    } catch (e) {
      alert(e.message);
      // props.setComponentName("signin");
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  return (
    <div style={{ background: "gray", height: 300, width: 300 }}>
      <h1>Sign-Up</h1>

      <input
        type={"text"}
        onChange={(e) => updateForm(e, "name")}
        placeholder="First Name"
      />
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
      {loading ? (
        <img src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif" />
      ) : (
        <button onClick={signup}>Sign Up</button>
      )}

      <button onClick={goToLogin}>Go To Login</button>
    </div>
  );
}
export default Signup;
