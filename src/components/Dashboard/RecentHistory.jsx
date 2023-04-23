import React from "react";
import NonImageActivityCard from "./NonImageActivityCard";

const mockActivityCard = [
  {
    title: "Today is a bright day",
    type: "run",
    icon: "fa-solid fa-person-running",
    dateTime: "20 March 2023 at 18.03",
    duration: 97,
    distance: 7810,
  },
  {
    title: "Banchamek boxing gym",
    type: "boxing",
    icon: "fa-solid fa-hand-fist",
    dateTime: "22 March 2023 at 18.03",
    duration: 75,
    distance: 0,
  },
];

const RecentHistory = () => {
  return (
    <div className="history-container">
      <h2 style={{ fontWeight: "600" }}>RECENT HISTORY</h2>

      <div className="history-card-box">
        {mockActivityCard.map((item, idx) => {
          return <NonImageActivityCard value={item} key={idx} />;
        })}
      </div>

      <button className="see-more-btn orange-btn">SEE MORE</button>
    </div>
  );
};

export default RecentHistory;
