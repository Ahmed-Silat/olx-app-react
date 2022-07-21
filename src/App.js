import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";
import { useEffect, useState } from "react";
import Dashboard from "./views/dashboard/dasboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CustomBtn from "./components/customBtn";
import { auth, getLoggedInUser } from "./config/firebase";

function App() {
  const [screen, setScreen] = useState(false);
  const [componentName, setComponentName] = useState("signin");
  const [signup, setSignup] = useState();
  const [signin, setSignin] = useState();
  const [dashboard, setDashboard] = useState(false);

  const changeScreen = () => {
    setScreen(true);
  };

  // const goToDashboard = () => {
  //   setDashboard(true);
  // };

  const goToSignup = (currentScreen) => {
    setSignup(currentScreen);
    changeScreen();
  };

  const goToSignin = (currentScreen) => {
    setSignin(currentScreen);
    changeScreen();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setComponentName("dashboard");
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {componentName === "signup" ? (
            <Signup setComponentName={setComponentName} />
          ) : null}
          {componentName === "signin" ? (
            <Signin setComponentName={setComponentName} />
          ) : null}
          {componentName === "dashboard" ? (
            <Dashboard setComponentName={setComponentName} />
          ) : null}
          {/* {screen ? <Signup /> : <Signin />} */}
          {/* {screen ? (
            <div>
              {signup === "signUp" && <Signup />}
              {signin === "signin" && <Signin />}
            </div>
          ) : (
            <div>
              <h3>Want to create an account ?</h3>
              <CustomBtn
                title={"Signup"}
                color={"green"}
                changeScreen={goToSignup}
                currentScreen={"signUp"}
              />
              <br />
              <h3>Already have an account ?</h3>
              <CustomBtn
                title={"Signin"}
                color={"red"}
                changeScreen={goToSignin}
                currentScreen={"signin"}
              />
            </div>
          )} */}
        </div>
      </header>
    </div>
  );
}

export default App;
