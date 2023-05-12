import React from "react";

const SummaryActivityCard = (props) => {
  return (
    <div className="summary-activity-box">
      <p key={props.value.id}>
        <i className={props.value.icon}></i>
        {props.value.title}
      </p>
      <p style={{ fontWeight: "700" }}>{props.value.value}</p>
      <p>{props.value.unit}</p>
    </div>
  );
};

export default SummaryActivityCard;
