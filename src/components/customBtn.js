import "./customBtn.css";
function CustomBtn(props) {
  return (
    <button
      className="custom-button"
      style={{ background: props.color }}
      onClick={() => props.changeScreen(props.currentScreen)}
    >
      {props.title}
    </button>
  );
}
export default CustomBtn;
