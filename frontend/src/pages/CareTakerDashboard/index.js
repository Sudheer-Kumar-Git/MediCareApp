import Header from "../../components/Header";
import CareTakerGreetingCard from "../../components/CareTakerGreetingCard";
import StatBox from "../../components/StatBox";
import Tabs from "../../components/Tabs";
import StatusCard from "../../components/StatusCard";
import QuickAction from "../../components/QuickAction";
import ProgressBar from "../../components/ProgressBar";
import { Mail, Bell, Calendar } from "lucide-react";
import "./index.css";

import { useState } from "react";

const CaretakerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="dashboard-container">
      <Header role="caretaker" switchLabel="Switch to Patient" />
      <CareTakerGreetingCard
        title="Caretaker Dashboard"
        subtitle="Monitoring Eleanor Thompson's medication adherence"
      />

      <div className="stats-row">
        <StatBox label="Adherence Rate" value="85%" />
        <StatBox label="Current Streak" value="5" />
        <StatBox label="Missed This Month" value="3" />
        <StatBox label="Taken This Week" value="4" />
      </div>

      <Tabs
        tabs={["Overview", "Recent Activity", "Calendar View", "Notifications"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="cards-row">
        <StatusCard
          title="Daily Medication Set"
          time="8:00 AM"
          status="Pending"
        />

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <QuickAction
            icon={<Mail />}
            label="Send Reminder Email"
            onClick={() => {}}
          />
          <QuickAction
            icon={<Bell />}
            label="Configure Notifications"
            onClick={() => {}}
          />
          <QuickAction
            icon={<Calendar />}
            label="View Full Calendar"
            onClick={() => {}}
          />
        </div>
      </div>

      <ProgressBar
        progress={85}
        takenDays={22}
        missedDays={3}
        remainingDays={5}
      />
    </div>
  );
};

export default CaretakerDashboard;
