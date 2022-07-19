import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";
import { useState } from "react";
import Dashboard from "./views/dashboard/dasboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CustomBtn from "./components/customBtn";

function App() {
  const [screen, setScreen] = useState(false);
  const [signup, setSignup] = useState();
  const [signin, setSignin] = useState();

  const changeScreen = () => {
    setScreen(true);
  };

  const goToSignup = (currentScreen) => {
    setSignup(currentScreen);
    changeScreen();
  };

  const goToSignin = (currentScreen) => {
    setSignin(currentScreen);
    changeScreen();
  };

  return (
    <div className="App">
      <header className="App-header">
        {screen ? (
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
        )}
      </header>
    </div>
  );
}

export default App;
