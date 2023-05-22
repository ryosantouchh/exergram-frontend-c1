import React from "react";

const NonImageActivityCard = (props) => {
  const convertMinToHour = (minutes) => {
    let hour = Math.floor(minutes / 60);
    let min = minutes % 60;

    return hour ? `${hour} h ${min} m` : `${min} m`;
  };

  return (
    <div className="recent-history-card">
      <div className="activity-left">
        <div className="activity-box">
          <i
            className={`${props.value.icon} activity-icon`}
            style={{ color: "#e8e8e8" }}
          ></i>
        </div>
        <h2 style={{ fontStyle: "italic" }}>{props.value.type}</h2>
      </div>
      <div className="activity-right">
        <div>
          <h3 style={{ fontWeight: "500" }}>{props.value.title}</h3>
          <p style={{ fontSize: "12px", fontWeight: "300" }}>
            {props.value.dateTime}
          </p>
        </div>
        <div className="card-stat">
          {props.value.duration !== 0 && (
            <div>
              <span>Duration : </span>
              <span>{convertMinToHour(props.value.duration)}</span>
            </div>
          )}
          {props.value.distance !== 0 && (
            <div>
              <span>Distance : </span>
              <span>{props.value.distance / 100} km</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonImageActivityCard;
