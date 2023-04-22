import React from "react";

const ActivityRadio = (props) => {
  return (
    <div className="activity-radio">
      <input
        className="radio-input"
        type="radio"
        name="activity"
        value={props.data.type}
        id={props.data.type}
        checked={props.selectedType === props.data.type}
        onChange={props.handleOnChangeRadio}
      />
      <div className="radio-tile">
        <i className={props.data.icon}></i>
        <label
          htmlFor={props.data.type}
          style={{ textTransform: "uppercase", fontStyle: "italic" }}
        >
          {props.data.type}
        </label>
      </div>
    </div>
  );
};

export default ActivityRadio;
