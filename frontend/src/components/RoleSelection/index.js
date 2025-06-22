import "./index.css";

const RoleSelection = ({ onSelectRole }) => (
  <div className="role-selection-page">
    <h1 className="role-selection-heading">Welcome to MediCare Companion</h1>
    <p>
      Your trusted partner in medication management. Choose your role to get
      started with personalized features.
    </p>

    <div className="role-selection-container">
      <div className="role-card patient-card">
        <div className="icon">👤</div>
        <h2 className="role-title patient">I'm a Patient</h2>
        <p className="role-description">
          Track your medication schedule and maintain your health records
        </p>
        <ul className="role-features">
          <li>Mark medications as taken</li>
          <li>Upload proof photos (optional)</li>
          <li>View your medication calendar</li>
          <li>Large, easy-to-use interface</li>
        </ul>
        <button
          className="role-button patient-btn"
          onClick={() => onSelectRole("patient")}
        >
          Continue as Patient
        </button>
      </div>

      <div className="role-card caretaker-card">
        <div className="icon">🧑‍⚕️</div>
        <h2 className="role-title caretaker">I'm a Caretaker</h2>
        <p className="role-description">
          Monitor and support your loved one's medication adherence
        </p>
        <ul className="role-features caretaker-list">
          <li>Monitor medication compliance</li>
          <li>Set up notification preferences</li>
          <li>View detailed reports</li>
          <li>Receive email alerts</li>
        </ul>
        <button
          className="role-button caretaker-btn"
          onClick={() => onSelectRole("caretaker")}
        >
          Continue as Caretaker
        </button>
      </div>
    </div>

    <p className="role-selection-footer">
      You can switch between roles anytime after setup
    </p>
  </div>
);

export default RoleSelection;
