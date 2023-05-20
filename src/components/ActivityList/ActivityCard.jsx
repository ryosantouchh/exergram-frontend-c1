import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ActivityContext } from "../../context/ActivityContext.jsx";

const MainActivityList = (props) => {
  const activityCtx = useContext(ActivityContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchType = async () => {
      const res = await activityCtx.fetchAllType();
    };
    if (activityCtx.activityType.length === 0) fetchType();

    if (activityCtx.activityType.length !== 0) findIconToShow("boxing");
  }, []);

  const findIconToShow = (typeInput) => {
    const foundType = activityCtx.activityType.find((e) => {
      return e.type === typeInput;
    });

    return foundType ? foundType.font_awesome_icon : "";
  };

  return (
    <>
      <div className="activity-card-main-content">
        {props.value.image ? (
          <div className="activity-card-main-img">
            <img src={props.value.image.url} />
          </div>
        ) : null}
        <div className="activity-card-exercise-details">
          <div className="activity-card-exercise-icon">
            {activityCtx.activityType.length === 0 ? null : (
              <i
                className={findIconToShow(props.value.type)}
                style={{ color: "#ffffff" }}
              ></i>
            )}
            <h3>{props.value.type}</h3>
          </div>
          <div className="activity-card-exercise-summary">
            <div className="activity-card-exercise-header">
              <h3>{props.value.title}</h3>
              <p>{props.value.dateTime}</p>
            </div>
            <div className="activity-card-exercise-info">
              <p>Duration : {props.value.duration} </p>
              <p>Distance : {props.value.distance} </p>
            </div>
          </div>
        </div>
        <div className="activity-card-edit-delete-box">
          {/* <a href="/createactivity"> */}
          <i className="fa-solid fa-xmark"></i>
          {/* </a> */}
          <a href="">
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => navigate("/createactivity/" + props.value._id)}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainActivityList;
