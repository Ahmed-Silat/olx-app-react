import CustomBtn from "../../components/customBtn";
import { useState } from "react";
import Dashboard from "../dashboard/dasboard";
import { ad, updateProfile, uploadImage } from "../../config/firebase";

function CreateAdd(props) {
  const [data, setData] = useState({});

  const newAdd = async () => {
    try {
      var result = await ad(data);
      // goToDashboard();
      props.setComponentName("dashboard");

      // const url = await uploadImage(imageURL);
      // await updateProfile(data);
    } catch (e) {
      alert(e.message);
    }
  };

  const goToDashboard = () => {
    props.setComponentName("dashboard");
  };

  const updateAdd = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  const [imageURL, setImageURL] = useState();
  // console.log(data);
  return (
    <div>
      <input type={"file"} onChange={(e) => setImageURL(e.target.files)} />
      <br />
      <input
        type={"text"}
        onChange={(e) => updateAdd(e, "title")}
        placeholder="Enter title"
      />
      <br />
      <input
        type={"text"}
        onChange={(e) => updateAdd(e, "description")}
        placeholder="Enter description"
      />
      <br />
      <input
        type={"number"}
        onChange={(e) => updateAdd(e, "price")}
        placeholder="Enter price"
      />
      <br />
      <button onClick={newAdd}>Create Add</button>
      <button onClick={goToDashboard}>Go to dasboard</button>
    </div>
  );
}
export default CreateAdd;
