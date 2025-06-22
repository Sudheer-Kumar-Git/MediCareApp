import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PatientDashboard from "./pages/PatientDashboard";
import CareTakerDashboard from "./pages/CareTakerDashboard";
import RoleSelection from "./components/RoleSelection";

const RoleSelectionWithNavigation = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    if (role === "patient") {
      navigate("/patient");
    } else if (role === "caretaker") {
      navigate("/caretaker");
    }
  };

  return <RoleSelection onSelectRole={handleSelectRole} />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoleSelectionWithNavigation />} />
      <Route path="/patient" element={<PatientDashboard />} />
      <Route path="/caretaker" element={<CareTakerDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
