import "./index.css";

const QuickAction = ({ icon, label, onClick }) => (
  <button className="quick-action" onClick={onClick}>
    <span className="quick-action-icon">{icon}</span>
    <span className="quick-action-label">{label}</span>
  </button>
);

export default QuickAction;
