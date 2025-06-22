import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ role, switchLabel }) => {
  const navigate = useNavigate();

  const handleSwitch = () => {
    if (role === "patient") {
      navigate("/caretaker");
    } else {
      navigate("/patient");
    }
  };

  return (
    <header className="app-header">
      <h2>MediCare Companion</h2>
      <button className="switch-role-button" onClick={handleSwitch}>
        {switchLabel}
      </button>
    </header>
  );
};

export default Header;
