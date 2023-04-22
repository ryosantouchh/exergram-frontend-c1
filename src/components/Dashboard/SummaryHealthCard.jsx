import React from "react";

const SummaryHealthCard = (props) => {
  return (
    <div className="summary-health-card">
      <div className="summary-health-icon">
        <i
          className={props.value.icon}
          style={{ color: "#e8e8e8", marginBottom: "8px" }}
        ></i>
        <p>{props.value.title}</p>
      </div>
      <p style={{ fontSize: "24px", fontWeight: "600" }}>
        {props.value.data.value}
      </p>
      <p>{props.value.data.unit}</p>
    </div>
  );
};

export default SummaryHealthCard;
