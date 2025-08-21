import "./usercard.css";

function Usercard(props) {
  console.log(props.imagePath);

  return (
    <div className="div-container">
      <h1>{props.name || "ram"}</h1>
      <img id="user-img" src={props.imagePath} alt="messi" />
      <p>{props.info}</p>
    </div>
  );
}

export default Usercard;
