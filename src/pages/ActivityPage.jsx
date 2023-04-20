import React from "react";
import ProfileList from "./ProfileList"
import ActivityList from "./ActivityList"
import EventList from "./EventList"
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

