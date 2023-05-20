import React, { createContext, useState } from "react";
import axios from "axios";
import { END_POINT_URL } from "../configs/base.url";

export const ActivityContext = createContext({});

const ActivityContextProvider = ({ children }) => {
  const [activityType, setActivityType] = useState([]);
  const [activityList, setActivityList] = useState([]);

  // Fetch Activity Type
  const fetchAllType = async () => {
    // const END_POINT = BASE_URL || "http://localhost:8080";
    const res = await axios.get(END_POINT_URL + "/activity_type");
    // console.log(res.data);
    setActivityType([...res.data]);
    return res.data;
  };

  const fetchAllActivity = async (token) => {
    // mock header authorization token
    // token here
    const mock_tokem_from_touch =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1OTc1ODQsImV4cCI6MTY4NDYyNjM4NH0.iMMyWNahZeSnxmOtiAeRPM29xNlcFrbNWGb-mv9azD4";

    const response = await axios.get(END_POINT_URL + "/activity", {
      headers: { Authorization: mock_tokem_from_touch },
    });

    //   console.log(response.data.activity_data);

    setActivityList([...response.data.activity_data]);
  };

  const deleteActivity = async (activity_id, token) => {
    const mock_tokem_from_touch =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1OTc1ODQsImV4cCI6MTY4NDYyNjM4NH0.iMMyWNahZeSnxmOtiAeRPM29xNlcFrbNWGb-mv9azD4";

    if (confirm("Delete this activity ?")) {
      const response = await axios.delete(
        END_POINT_URL + "/activity/" + activity_id,
        {
          headers: { Authorization: mock_tokem_from_touch },
        }
      );
      console.log(response);

      const responseFromGet = await axios.get(END_POINT_URL + "/activity", {
        headers: { Authorization: mock_tokem_from_touch },
      });
      console.log(responseFromGet);

      setActivityList([...responseFromGet.data.activity_data]);
    }
  };

  const contextValue = {
    fetchAllType,
    activityType,
    fetchAllActivity,
    activityList,
    deleteActivity,
  };

  return (
    <ActivityContext.Provider value={contextValue}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
