import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
import "./EventList.css";

const EventList = () => {
  const [eventList, setEventList] = useState([]);

  // console.log("event");

  const token = "Bearer" + " " + window.localStorage.getItem("token");

  useEffect(() => {
    const fetchAllEvent = async () => {
      const response = await axios.get(
        import.meta.env.VITE_APP_BACKEND_URL + "/event",
        {
          headers: { Authorization: token },
        }
      );

      setEventList([...response.data]);
    };

    fetchAllEvent();
  }, []);

  return (
    <>
      <div className="activity-event-right-sidebar">
        <h2>EVENT</h2>
        <div className="activity-event-right-sidebar-event-box">
          {eventList.map((item, idx) => {
            return <EventCard value={item} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default EventList;
