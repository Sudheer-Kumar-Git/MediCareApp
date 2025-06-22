import Header from "../../components/Header";
import GreetingCard from "../../components/GreetingCard";
import MedicationItem from "../../components/MedicationSection/MedicationItem";
import ProofPhotoUpload from "../../components/MedicationSection/ProofPhotoUpload";
import Calendar from "../../components/Calendar";
import Button from "../../components/Button";
import "./index.css";

const PatientDashboard = () => (
  <div className="dashboard-container">
    <Header role="patient" switchLabel="Switch to Caretaker" />

    <div className="content-wrapper">
      <GreetingCard />

      <div className="main-section">
        <div className="left-panel">
          <h3 className="section-title">Today's Medication</h3>
          <MedicationItem title="Daily Medication Set" time="8:00 AM" />
          <ProofPhotoUpload />
          <Button
            label="✓ Mark as Taken"
            onClick={() => alert("Marked as taken!")}
          />
        </div>

        <div className="right-panel">
          <Calendar />
        </div>
      </div>
    </div>
  </div>
);

export default PatientDashboard;
