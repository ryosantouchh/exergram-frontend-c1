import React from "react";
import SummaryHealthCard from "./SummaryHealthCard";

const SummaryHealthBox = () => {
  return (
    <div className="summary-health-box">
      <SummaryHealthCard />
      <SummaryHealthCard />
      <SummaryHealthCard />
    </div>
  );
};

export default SummaryHealthBox;
