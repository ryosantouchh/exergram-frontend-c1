import React from "react";

const SummaryHealthCard = (props) => {
  return (
    <div className="summary-health-card">
      <div className="summary-icon">
        <i
          className="summary-icon fa-solid fa-fire-flame-curved"
          style={{ color: "#e8e8e8" }}
        ></i>
      </div>
      <p>Calories Burn</p>
      <p>1341 kcal</p>
    </div>
  );
};

export default SummaryHealthCard;
