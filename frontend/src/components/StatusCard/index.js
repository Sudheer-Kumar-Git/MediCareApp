import "./index.css";

const StatusCard = ({ title, time, status }) => (
  <div className="status-card">
    <div className="status-title">{title}</div>
    <div className="status-footer">
      <span className="status-time">{time}</span>
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    </div>
  </div>
);

export default StatusCard;
