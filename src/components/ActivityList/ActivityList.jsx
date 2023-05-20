import React, { useEffect, useState, useContext } from "react";
import ActivityCard from "./ActivityCard";
import { END_POINT_URL } from "../../configs/base.url.js";
import { ActivityContext } from "../../context/ActivityContext";
import "./ActivityList.css";
import axios from "axios";

// const END_POINT = BASE_URL || "http://localhost:8080";

// const END_POINT = BASE_URL || "http://localhost:8080";

const ActivityList = () => {
  //   const [activityList, setActivityList] = useState([]);

  const activityCtx = useContext(ActivityContext);

  useEffect(() => {
    // const fetchActivity = async () => {
    //   // mock header authorization token
    //   const mock_tokem_from_touch =
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1Njg1MTgsImV4cCI6MTY4NDU5NzMxOH0.FVhBbKSuE37rxx24ZdPbdl3P25sKRJR5uWRs3ycFL5k";

    //   const response = await axios.get(END_POINT_URL + "/activity", {
    //     headers: { Authorization: mock_tokem_from_touch },
    //   });

    //   //   console.log(response.data.activity_data);

    //   setActivityList([...response.data.activity_data]);
    // };

    const fetchActivity = async () => {
      await activityCtx.fetchAllActivity();
    };

    fetchActivity();
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
