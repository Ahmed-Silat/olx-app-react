import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getData } from "../../config/firebase";

function ExistingAds() {
  // const [storeData, setStoreData] = useState([]);
  // const receiveData = async () => {
  //   const result = await getData();
  //   setStoreData(result);
  //   console.log("receiveData", result);
  // };

  // useEffect(async () => {
  //   const result = await receiveData();
  //   console.log(result);
  // }, []);

  return (
    <div>
      <h1>My Ads</h1>

      {/* {storeData.map((item) => {
        return <>{item.name}</>;
      })} */}
    </div>
  );
}
export default ExistingAds;
