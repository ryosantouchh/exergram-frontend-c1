import React, { createContext, useState } from "react";
import axios from "axios";
import { END_POINT_URL } from "../configs/base.url";

export const ActivityContext = createContext({});

const ActivityContextProvider = ({ children }) => {
  const [activityType, setActivityType] = useState([]);
  const [activityList, setActivityList] = useState([]);

  const token = `Bearer ${window.localStorage.getItem("token")}`;

  // Fetch Activity Type
  const fetchAllType = async () => {
    // const END_POINT = BASE_URL || "http://localhost:8080";
    const res = await axios.get(END_POINT_URL + "/activity_type");
    // console.log(res.data);
    setActivityType([...res.data]);
    return res.data;
  };

  const fetchAllActivity = async () => {
    // mock header authorization token
    // token here
    // const mock_tokem_from_touch =
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1OTc1ODQsImV4cCI6MTY4NDYyNjM4NH0.iMMyWNahZeSnxmOtiAeRPM29xNlcFrbNWGb-mv9azD4";

    const token = `Bearer ${window.localStorage.getItem("token")}`;

    const response = await axios.get(END_POINT_URL + "/activity", {
      headers: { Authorization: token },
    });

    if (response.data.activity_data) {
      setActivityList([...response.data.activity_data]);
    }
  };

  const deleteActivity = async (activity_id) => {
    if (confirm("Delete this activity ?")) {
      console.log("before axios");
      const response = await axios.delete("/activity/" + activity_id, {
        headers: { Authorization: token },
      });
      // console.log(response);

      const responseFromGet = await axios.get("/activity", {
        headers: { Authorization: token },
      });
      // console.log(responseFromGet);

      setActivityList([...responseFromGet.data.activity_data]);
    }
  };

  const contextValue = {
    fetchAllType,
    activityType,
    fetchAllActivity,
    activityList,
    deleteActivity,
    setActivityList,
  };

  return (
    <ActivityContext.Provider value={contextValue}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
