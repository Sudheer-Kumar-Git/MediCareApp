import "./index.css";
import StatBox from "../StatBox";

const CareTakerGreetingCard = () => (
  <div className="greeting-container">
    <h2>Caretaker Dashboard</h2>
    <p>Monitoring Eleanor Thompson's medication adherence</p>
    <div className="stats-wrapper">
      <StatBox label="Adherence Rate" value="85%" />
      <StatBox label="Current Streak" value="5" />
      <StatBox label="Missed This Month" value="3" />
      <StatBox label="Taken This Week" value="4" />
    </div>
  </div>
);

export default CareTakerGreetingCard;
