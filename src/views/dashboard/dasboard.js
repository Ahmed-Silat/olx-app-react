import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import App from "../../App";
import CustomBtn from "../../components/customBtn";
import CreateAd from "../Ads/createNewAd";
import { getData, getLoggedInUser } from "../../config/firebase";
import CreateCard from "../Card/Card";
import "./Dashboard.css";

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

  const [storeData, setStoreData] = useState([]);
  const receiveData = async () => {
    const result = await getData();
    setStoreData(result);
    console.log("receiveData", storeData);
  };

  useEffect(() => {
    const result = receiveData();
    console.log(result);
    // const receiveData = async () => {
    //   const result = await getData();
    //   setStoreData(result);
    //   console.log("receiveData", result);
    // };
  });

  return (
    <div>
      <div style={{ background: "gray", height: 300, width: 300 }}>
        <h1>Dashboard</h1>
        {storeData.map((item) => {
          return (
            // <div>
            //   <span>{item.title}</span>
            //   <br />
            //   <span>{item.description}</span>
            //   <br />
            //   <span>{item.price}</span>
            // </div>
            // <div className="card">
            <CreateCard
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
            // </div>
          );
        })}
        <CustomBtn
          title={"Create New Ad"}
          color={"lightyellow"}
          changeScreen={makeNewAd}
        />
        <CustomBtn title={"My Ads"} color={"aqua"} changeScreen={existingAd} />

        <CustomBtn title={"logout"} changeScreen={logout} color={"lightblue"} />
      </div>
    </div>
  );
}
export default Dashboard;
