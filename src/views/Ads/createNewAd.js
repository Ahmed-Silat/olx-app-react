import CustomBtn from "../../components/customBtn";
import { useState } from "react";
import Dashboard from "../dashboard/dasboard";
import { add } from "../../config/firebase";

function CreateAdd(props) {
  const [data, setData] = useState({});

  const newAdd = async () => {
    var result = await add(data);
    // goToDashboard();
    props.setComponentName("dashboard");
  };

  const goToDashboard = () => {
    props.setComponentName("dashboard");
  };

  const updateAdd = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  return (
    <div>
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
