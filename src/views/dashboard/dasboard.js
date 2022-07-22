import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import App from "../../App";
import CustomBtn from "../../components/customBtn";
import CreateAdd from "../Ads/createNewAd";
import { getLoggedInUser } from "../../config/firebase";

function Dashboard(props) {
  const [screen, setScreen] = useState(false);
  const [newAdd, setNewAdd] = useState(false);
  const [page, setPage] = useState(false);

  const existingAd = () => {
    props.setComponentName("existingAd");
  };

  const makeNewAd = () => {
    // setNewAdd(true);
    props.setComponentName("createAd");
  };

  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // changeScreen();
        props.setComponentName("signin");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div>
      <div style={{ background: "gray", height: 300, width: 300 }}>
        <h1>Dashboard</h1>
        <CustomBtn
          title={"Create New Ad"}
          color={"lightyellow"}
          changeScreen={makeNewAd}
        />
        <CustomBtn title={"My Ads"} color={"aqua"} changeScreen={existingAd} />
        {/* <br /> */}
        <CustomBtn title={"logout"} changeScreen={logout} color={"lightblue"} />
      </div>
    </div>
  );
}
export default Dashboard;
