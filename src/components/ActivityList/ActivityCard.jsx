import React, { useState, useEffect, useContext } from "react";
import {
  convertDurationToShow,
  convertDistanceToShow,
} from "../../utils/activity.util.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { ActivityContext } from "../../context/ActivityContext.jsx";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const ActivityCard = (props) => {
  const [biggerImg, setBiggerImg] = useState(false);
  const [clickToZoom, setClickToZoom] = useState(false);
  const activityCtx = useContext(ActivityContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchType = async () => {
      const res = await activityCtx.fetchAllType();
    };
    if (activityCtx.activityType.length === 0) fetchType();
  }, []);

  const findIconToShow = (typeInput) => {
    const foundType = activityCtx.activityType.find((e) => {
      return e.type === typeInput;
    });

    return foundType ? foundType.font_awesome_icon : "";
  };

  const biggerImgFunction = () => {
    if (window.innerWidth >= 1140) {
      if (biggerImg) {
        return {
          scale: "1.7",
          zIndex: "3",
          transition: "0.3s ease-in-out",
          boxShadow: "-3px 3px 3px rgba(51, 51, 51, 0.3)",
        };
      } else {
        return { transition: "0.3s ease-in-out" };
      }
    }
  };

  return (
    <>
      <div className="activity-card-main-content">
        {props.value.image ? (
          <div className="activity-card-main-img">
            <img
              src={props.value.image.url}
              onClick={() => setBiggerImg((prev) => (prev = true))}
              onMouseLeave={() => {
                setBiggerImg((prev) => (prev = false));
                setClickToZoom((prev) => (prev = false));
              }}
              onMouseOver={() => setClickToZoom((prev) => (prev = true))}
              style={
                biggerImgFunction()
                // biggerImg
                //   ? {
                //       scale: "1.7",
                //       zIndex: "3",
                //       transition: "0.3s ease-in-out",
                //       boxShadow: "-4px 4px 4px rgba(51, 51, 51, 0.3)",
                //     }
                //   : { transition: "0.3s ease-in-out" }
              }
            />
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
              <p>
                {dayjs(props.value.activityDate).format("dddd , D MMM YYYY")}
                {" " + "at" + " "}
                {dayjs(props.value.activityDate).format("LT")}{" "}
                {/* {dayjs(props.value.activityDate).format("Z")} */}
              </p>
            </div>
            <div className="activity-card-exercise-info">
              <p>Duration : {convertDurationToShow(props.value.duration)} </p>
              {props.value.distance ? (
                <p>Distance : {convertDistanceToShow(props.value.distance)} </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="activity-card-edit-delete-box">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => navigate("/createactivity/" + props.value._id)}
          ></i>

          <i
            className="fa-solid fa-xmark"
            onClick={() => activityCtx.deleteActivity(props.value._id)}
          ></i>
        </div>
        {/* <div className="activity-card-note-box">{props.value.note}</div> */}
      </div>
    </>
  );
};

export default ActivityCard;
