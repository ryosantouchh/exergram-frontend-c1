import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import ActivityCard from "./ActivityCard";
import { ActivityContext } from "../../context/ActivityContext";
import "./ActivityList.css";
import axios from "axios";

// const END_POINT = BASE_URL || "http://localhost:8080";

const ActivityList = () => {
  //   const [activityList, setActivityList] = useState([]);
  // const [page, setPage] = useState(1);
  const { feedPage } = useParams();

  // console.log("acitivitylist");

  const activityCtx = useContext(ActivityContext);
  const navigate = useNavigate();

  // if (!feedPage) {
  //   navigate("/feed/1");
  // }

  const renderPageButton = () => {
    const pageButtons = [];

    for (let i = 1; i <= activityCtx.page; i++) {
      pageButtons.push(
        <button
          onClick={() => {
            navigate("/feed/" + i);
            window.scrollTo(0, 0);
          }}
          key={i}
          disabled={+feedPage === i ? true : false}
          style={+feedPage === i ? { backgroundColor: "#fa7d00" } : null}
        >
          {i}
        </button>
      );
    }

    useEffect(() => {
      if (window.localStorage.getItem("token")) {
        // if (!feedPage) {
        //   activityCtx.fetchAllActivity(1);
        // }
        activityCtx.fetchAllActivity(feedPage);
        // console.log("effect activity page");
      }

      if (!feedPage) {
        navigate("/feed/1");
      }
    }, [feedPage]);

    return pageButtons;
  };

  // useEffect(() => {
  //   if (window.localStorage.getItem("token")) {
  //     // if (!feedPage) {
  //     //   activityCtx.fetchAllActivity(1);
  //     // }
  //     activityCtx.fetchAllActivity(feedPage);
  //   }
  // }, []);

  return (
    <div className="activity-list-main-body">
      {activityCtx.activityList.map((item, idx) => {
        return <ActivityCard value={item} key={item._id} />;
      })}
      <div className="activity-list-page-button-box">{renderPageButton()}</div>
    </div>
  );
};

export default ActivityList;
