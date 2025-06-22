import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const medicationData = [
    {
      date: "2025-06-18",
      status: "taken",
    },
    {
      date: "2025-06-17",
      status: "missed",
    },
    {
      date: "2025-06-19",
      status: "taken",
    },
  ];

  const formatDate = (date) => date.toISOString().slice(0, 10);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = formatDate(date);

      if (dateStr === formatDate(new Date())) {
        return "today-dot";
      }

      const entry = medicationData.find((d) => d.date === dateStr);
      if (entry) {
        return entry.status === "taken" ? "green-dot" : "red-dot";
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <p className="calendar-title">Medication Calendar</p>
      <ReactCalendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <p className="legend">
        <span className="green-dot legend-dot"></span> Medication taken
        <span className="red-dot legend-dot"></span> Missed medication
        <span className="today-dot legend-dot"></span> Today
      </p>
    </div>
  );
};

export default Calendar;
