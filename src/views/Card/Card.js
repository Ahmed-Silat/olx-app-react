import "./Card.css";
function CreateCard(props) {
  return (
    // <span className="main-card">
    //   <div>{props.title}</div>
    //   <div>{props.description}</div>
    //   <div>{props.price}</div>
    // </span>
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" />
      <div className="container">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
export default CreateCard;
