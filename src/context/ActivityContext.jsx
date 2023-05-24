import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ActivityContext = createContext({});

const ActivityContextProvider = ({ children }) => {
  const [activityType, setActivityType] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [countActivities, setCountActivities] = useState(0);
  const [countActivityType, setCountActivityType] = useState({});
  const [page, setPage] = useState(1);

  // Fetch Activity Type
  const fetchAllType = async () => {
    // const END_POINT = BASE_URL || "http://localhost:8080";
    const res = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/activity_type"
    );
    // console.log(res.data);
    setActivityType([...res.data]);
    return res.data;
  };

  const fetchAllActivity = async (pageParams) => {
    const token = `Bearer ${window.localStorage.getItem("token")}`;

    // console.log("ctx activity fetch");

    const response = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/activity",
      {
        headers: { Authorization: token, pageParams },
      }
    );

    // console.log(response);

    if (response.data.activity_data) {
      setActivityList([...response.data.activity_data]);
      setCountActivities((prev) => (prev = response.data.count.all_activity));
      setCountActivityType({ ...response.data.count.by_type });
      setPage(
        (prev) => (prev = Math.ceil(response.data.count.all_activity / 10))
      );
    }
  };

  const deleteActivity = async (activity_id) => {
    const token = `Bearer ${window.localStorage.getItem("token")}`;

    if (confirm("Delete this activity ?")) {
      const response = await axios.delete(
        import.meta.env.VITE_APP_BACKEND_URL + "/activity/" + activity_id,
        {
          headers: { Authorization: token },
        }
      );
      // console.log(response);

      const responseFromGet = await axios.get(
        import.meta.env.VITE_APP_BACKEND_URL + "/activity",
        {
          headers: { Authorization: token },
        }
      );
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
