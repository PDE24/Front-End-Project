import "./Vote.css";
import Heart from "../../images/votes-heart.png"

export default function Vote({ votes }) {
  return (
    <div className="votes">
        <img className="vote-icon" src={Heart} alt="vote icon"/>
      <p>{votes}</p> 
    </div>
  );
}
