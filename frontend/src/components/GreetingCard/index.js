import "./index.css";
import StatBox from "../StatBox";

const GreetingCard = () => (
  <div className="greeting-container">
    <h2>Good Evening!</h2>
    <p>Ready to stay on track with your medication?</p>
    <div className="stats-wrapper">
      <StatBox label="Day Streak" value="0" />
      <StatBox label="Today's Status" value="" />
      <StatBox label="Monthly Rate" value="0%" />
    </div>
  </div>
);

export default GreetingCard;
