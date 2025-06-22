import "./index.css";

const MedicationItem = ({ title, time }) => (
  <div className="medication-item">
    <div className="circle-number">1</div>
    <div className="medication-info">
      <p className="med-title">{title}</p>
      <p className="med-desc">Complete set of daily tablets</p>
    </div>
    <p className="med-time">{time}</p>
  </div>
);

export default MedicationItem;
