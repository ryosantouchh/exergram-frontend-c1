import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileList from "../components/ProfileList/ProfileList";
import ActivityList from "../components/ActivityList/ActivityList";
import { ActivityContext } from "../context/ActivityContext";
import EventList from "../components/EventList/EventList";
import "../styles/ActivityPage.css";
import Layout from "../layout/Layout";

const ActivityPage = () => {
  const { feedPage } = useParams();

  // console.log("acitivity page");

  const activityCtx = useContext(ActivityContext);
  // console.log(activityCtx);
  const navigate = useNavigate();

  // if (!feedPage) {
  //   navigate("/feed/1");
  // }

  // useEffect(() => {
  //   if (window.localStorage.getItem("token")) {
  //     // if (!feedPage) {
  //     //   activityCtx.fetchAllActivity(1);
  //     // }
  //     activityCtx.fetchAllActivity(feedPage);
  //     // console.log("effect activity page");
  //   }
  // }, [feedPage]);

  return (
    <Layout>
      <div className="activity-list-container">
        <ProfileList countActivity={activityCtx.countActivities} />
        <ActivityList />
        <EventList />
      </div>
    </Layout>
  );
};

export default ActivityPage;
