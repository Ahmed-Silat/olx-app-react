import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import App from "../../App";
import CustomBtn from "../../components/customBtn";
import CreateAdd from "../Adds/createNewAdd";
import { getLoggedInUser } from "../../config/firebase";

function Dashboard() {
  const [screen, setScreen] = useState(false);
  const [newAdd, setNewAdd] = useState(false);
  const [page, setPage] = useState(false);

  const changeScreen = () => {
    setScreen(true);
  };

  const makeNewAdd = () => {
    setNewAdd(true);
  };

  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        changeScreen();
      })
      .catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
    const user = getLoggedInUser();
    if (user) {
    } else {
      return setNewAdd(false);
    }
  }, []);

  return (
    <div>
      {newAdd ? (
        <CreateAdd />
      ) : (
        <div>
          {screen ? (
            <App />
          ) : (
            <div style={{ background: "gray", height: 300, width: 300 }}>
              <h1>Dashboard</h1>
              <CustomBtn
                title={"Create New Add"}
                color={"lightyellow"}
                changeScreen={makeNewAdd}
              />
              <CustomBtn title={"My Ads"} color={"aqua"} />
              {/* <br /> */}
              <CustomBtn
                title={"logout"}
                changeScreen={logout}
                color={"lightblue"}
              />
              {/* <button onClick={logout}>logout</button> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Dashboard;
