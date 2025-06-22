import "./index.css";

const StatBox = ({ label, value }) => (
  <div className="stat-box">
    <p className="value">{value}</p>
    <p className="label">{label}</p>
  </div>
);

export default StatBox;
