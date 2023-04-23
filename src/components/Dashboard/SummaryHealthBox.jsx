import React from "react";
import SummaryHealthCard from "./SummaryHealthCard";

const mockHealthData = [
  {
    title: "Calories Burn",
    icon: "fa-solid fa-fire",
    data: {
      value: 3540,
      unit: "kilo calories",
    },
  },
  {
    title: "BMI",
    icon: "fa-solid fa-weight-scale",
    data: {
      value: 21.4,
      unit: "",
    },
  },
  {
    title: "Macro Goal",
    icon: "fa-solid fa-utensils",
    data: {
      value: 2000,
      unit: "kilo calories",
    },
  },
];

const SummaryHealthBox = () => {
  return (
    <div className="summary-health-box">
      {mockHealthData.map((item, idx) => {
        return <SummaryHealthCard value={item} key={idx} />;
      })}
    </div>
  );
};

export default SummaryHealthBox;
