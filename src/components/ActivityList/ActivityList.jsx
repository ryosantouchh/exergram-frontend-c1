import React, { useEffect, useState, useContext } from "react";
import ActivityCard from "./ActivityCard";
import { END_POINT_URL } from "../../configs/base.url.js";
import { ActivityContext } from "../../context/ActivityContext";
import "./ActivityList.css";
import axios from "axios";

// const END_POINT = BASE_URL || "http://localhost:8080";

const ActivityList = () => {
  //   const [activityList, setActivityList] = useState([]);

  const activityCtx = useContext(ActivityContext);

  useEffect(() => {
    // const fetchActivity = async () => {
    //   const token = `Bearer ${window.localStorage.getItem("token")}`;

    //   const response = await axios.get(END_POINT_URL + "/activity", {
    //     headers: { Authorization: token },
    //   });

    //   //   console.log(response.data.activity_data);

    //   if (response.data.activity_data) {
    //     activityCtx.setActivityList([...response.data.activity_data]);
    //   }
    // };

    // const fetchActivity = async () => {
    //   await activityCtx.fetchAllActivity();
    // };

    if (window.localStorage.getItem("token")) {
      activityCtx.fetchAllActivity();
    }
  }, []);

  return (
    <div className="activity-list-main-body">
      {activityCtx.activityList.map((item, idx) => {
        return <ActivityCard value={item} key={item._id} />;
      })}
    </div>
  );
};

export default ActivityList;
