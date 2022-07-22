import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";
import { useEffect, useState } from "react";
import Dashboard from "./views/dashboard/dasboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CustomBtn from "./components/customBtn";
import { auth, getLoggedInUser } from "./config/firebase";
import CreateAdd from "./views/Ads/createNewAd";
import ExistingAds from "./views/Ads/existingAds";

function App() {
  const [componentName, setComponentName] = useState("signin");

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
          {componentName === "createAd" ? (
            <CreateAdd setComponentName={setComponentName} />
          ) : null}
          {componentName === "existingAd" ? (
            <ExistingAds setComponentName={setComponentName} />
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
