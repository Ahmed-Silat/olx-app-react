import CustomBtn from "../../components/customBtn";
import { useState } from "react";
import Dashboard from "../dashboard/dasboard";
import { ad, updateProfile, uploadImage } from "../../config/firebase";

function CreateAd(props) {
  const [data, setData] = useState({});

  const newAd = async () => {
    try {
      var result = await ad(data);
      // goToDashboard();
      const url = await uploadImage(imageURL);
      await updateProfile(data);
      props.setComponentName("dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  const goToDashboard = () => {
    props.setComponentName("dashboard");
  };

  const updateAd = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  const [imageURL, setImageURL] = useState();
  // console.log(data);
  return (
    <div>
      <input type={"file"} onChange={(e) => setImageURL(e.target.files)} />
      <br />

      <img src={imageURL} onChange={(e) => updateAd(e, "image")} />

      <br />

      <input
        type={"text"}
        onChange={(e) => updateAd(e, "title")}
        placeholder="Enter title"
      />
      <br />
      <input
        type={"text"}
        onChange={(e) => updateAd(e, "description")}
        placeholder="Enter description"
      />
      <br />
      <input
        type={"number"}
        onChange={(e) => updateAd(e, "price")}
        placeholder="Enter price"
      />
      <br />
      <button onClick={newAd}>Create Add</button>
      <button onClick={goToDashboard}>Go to dasboard</button>
    </div>
  );
}
export default CreateAd;
