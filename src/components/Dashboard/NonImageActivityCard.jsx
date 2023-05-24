import React, { useState, useEffect, useContext } from "react";
import { ActivityContext } from "../../context/ActivityContext.jsx";
import {
  convertDurationToShow,
  convertDistanceToShow,
} from "../../utils/activity.util.jsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const NonImageActivityCard = (props) => {
  const convertMinToHour = (minutes) => {
    let hour = Math.floor(minutes / 60);
    let min = minutes % 60;

    return hour ? `${hour} h ${min} m` : `${min} m`;
  };

  const activityCtx = useContext(ActivityContext);

  const findIconToShow = (typeInput) => {
    const foundType = activityCtx.activityType.find((e) => {
      return e.type === typeInput;
    });

    return foundType ? foundType.font_awesome_icon : "";
  };

  useEffect(() => {
    const fetchType = async () => {
      const res = await activityCtx.fetchAllType();
    };
    if (activityCtx.activityType.length === 0) fetchType();
  }, []);

  return (
    <div className="recent-history-card">
      <div className="activity-left">
        <div className="activity-box">
          <i
            // className={`${props.value.icon} activity-icon`}
            className={findIconToShow(props.value.type)}
            style={{ color: "#e8e8e8", fontSize: "40px" }}
          ></i>
        </div>
        <h2 style={{ color: "#fa7d00" }}>{props.value.type}</h2>
      </div>
      <div className="activity-right">
        <div>
          <h3 style={{ fontWeight: "500" }}>{props.value.title}</h3>
          <p style={{ fontSize: "12px", fontWeight: "300" }}>
            {dayjs(props.value.activityDate).format("dddd , D MMM YYYY")}
            {" " + "at" + " "}
            {dayjs(props.value.activityDate).format("LT")}{" "}
            {/* {dayjs(props.value.activityDate).format("Z")} */}
          </p>
        </div>
        <div className="card-stat">
          {props.value.duration !== 0 && (
            <div>
              <span>Duration : </span>
              <span>{convertDurationToShow(props.value.duration)}</span>
            </div>
          )}
          {props.value.distance !== 0 && (
            <div>
              <span>
                {props.value.distance ? (
                  <>
                    <span>Distance : </span>
                    {convertDistanceToShow(props.value.distance)}
                  </>
                ) : null}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonImageActivityCard;
