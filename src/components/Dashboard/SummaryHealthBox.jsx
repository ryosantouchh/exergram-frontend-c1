import React, { useState, useEffect, useContext } from "react";
import SummaryHealthCard from "./SummaryHealthCard";

const SummaryHealthBox = (props) => {
  const mockHealthData = [
    {
      title: "Calories Burn",
      icon: "fa-solid fa-fire",
      data: {
        value: props.calories,
        unit: "kcal",
      },
    },
    {
      title: "BMI",
      icon: "fa-solid fa-weight-scale",
      data: {
        value: props.BMI,
        unit: "-",
      },
    },
    {
      title: "Macro Goal",
      icon: "fa-solid fa-utensils",
      data: {
        value: props.macronutrient,
        unit: "kcal per day",
      },
    },
  ];

  return (
    <div className="summary-health-box">
      {mockHealthData.map((item, idx) => {
        return <SummaryHealthCard value={item} key={idx} BMI={props.BMI} />;
      })}
    </div>
  );
};

export default SummaryHealthBox;
