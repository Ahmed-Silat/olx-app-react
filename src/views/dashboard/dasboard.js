import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import App from "../../App";
import CustomBtn from "../../components/customBtn";

function Dashboard() {
  const [screen, setScreen] = useState(false);

  const changeScreen = () => {
    setScreen(true);
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

  return (
    <div>
      {screen ? (
        <App />
      ) : (
        <div style={{ background: "gray", height: 300, width: 300 }}>
          <h1>Dashboard</h1>
          <CustomBtn title={"Create New Add"} color={"lightyellow"} />
          <CustomBtn title={"View Existing Add"} color={"aqua"} />
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
  );
}
export default Dashboard;
