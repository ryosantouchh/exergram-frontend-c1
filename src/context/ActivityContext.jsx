import React, { createContext, useState } from "react";
import axios from "axios";

export const ActivityContext = createContext({});

const ActivityContextProvider = ({ children }) => {
  const [activityType, setActivityType] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [countActivities, setCountActivities] = useState(0);
  const [countActivityType, setCountActivityType] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch Activity Type
  const fetchAllType = async () => {
    // const END_POINT = BASE_URL || "http://localhost:8080";
    const res = await axios.get("/activity_type");
    // console.log(res.data);
    setActivityType([...res.data]);
    return res.data;
  };

  const fetchAllActivity = async (pageParams) => {
    const token = `Bearer ${window.localStorage.getItem("token")}`;

    const response = await axios.get("/activity", {
      headers: { Authorization: token, pageParams },
    });

    if (response.data.activity_data) {
      setActivityList([...response.data.activity_data]);
      setCountActivities(response.data.count.all_activity);
      setPage(
        (prev) => (prev = Math.ceil(response.data.count.all_activity / 10))
      );
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
    page,
    countActivities,
  };

  return (
    <ActivityContext.Provider value={contextValue}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
