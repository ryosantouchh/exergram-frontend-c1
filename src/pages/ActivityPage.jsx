import React from "react";
import ProfileList from "../components/ProfileList/ProfileList"
import ActivityList from "../components/ActivityList/ActivityList"
import EventList from "../components/EventList/EventList"
import "../styles/ActivityPage.css";

const ActivityPage = () => {
    return (
        <div className="activity-list-container">
            <ProfileList />
            <ActivityList />
            <EventList />
        </div>
    );
}

export default ActivityPage

