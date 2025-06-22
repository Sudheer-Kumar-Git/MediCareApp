import "./index.css";

const Button = ({ label, onClick }) => (
  <button className="primary-btn" onClick={onClick}>
    {label}
  </button>
);

export default Button;
