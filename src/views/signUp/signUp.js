import { useState } from "react";
import { signUp } from "../../config/firebase";
import Dashboard from "../dashboard/dasboard";
import Signin from "../signIn/signIn";
function Signup(props) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [screen, setScreen] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const goToDashboard = () => {
    setDashboard(true);
  };

  const goToLogin = () => {
    setLogin(true);
  };
  const signup = async () => {
    setLoading(true);
    try {
      var result = await signUp(userInfo);
      // props.login();
      // props.changeScreen("dashboard");
      goToDashboard();
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  return (
    <div>
      {dashboard ? (
        <Dashboard />
      ) : (
        <div>
          {login ? (
            <Signin />
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
}
export default Signup;
