import React from "react";
import SummaryActivityCard from "./SummaryActivityCard";

const mockActivityCard = [
  {
    id: 1,
    title: "Total Distance",
    icon: "fa-solid fa-road",
    value: 18,
    unit: "kilometre",
  },
  {
    id: 2,
    title: "Total Duration",
    icon: "fa-solid fa-stopwatch",
    value: 3,
    unit: "hours",
  },
];

const SummaryActivityCardBox = () => {
  return (
    <div className="summary-container">
      {mockActivityCard.map((item, idx) => {
        return <SummaryActivityCard value={item} key={idx} />;
      })}
    </div>
  );
};

export default SummaryActivityCardBox;
