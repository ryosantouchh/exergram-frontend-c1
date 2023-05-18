import React from "react";

const ActivityRadio = (props) => {
  return (
    <div className="activity-radio">
      <input
        className="radio-input"
        type="radio"
        name="activity"
        value={props.data.value}
        id={props.data.type}
        checked={props.selectedType === props.data.value}
        onChange={props.handleOnChangeRadio}
      />
      <div
        className="radio-tile"
        style={props.validate.type ? { outline: "2px solid red" } : null}
      >
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
