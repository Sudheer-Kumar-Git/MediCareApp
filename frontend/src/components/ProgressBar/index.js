import "./index.css";

const ProgressBar = ({ progress, takenDays, missedDays, remainingDays }) => (
  <div className="progress-container">
    <div className="progress-title">Overall Progress</div>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
    <div className="progress-info">
      <span className="taken">
        {takenDays} days
        <br />
        Taken
      </span>
      <span className="missed">
        {missedDays} days
        <br />
        Missed
      </span>
      <span className="remaining">
        {remainingDays} days
        <br />
        Remaining
      </span>
    </div>
  </div>
);

export default ProgressBar;
