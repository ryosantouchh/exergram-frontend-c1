import React from "react";
import ProfileList from "../components/ProfileList/ProfileList"
import ActivityList from "../components/ActivityList/ActivityList"
import EventList from "../components/EventList/EventList"
import "../styles/ActivityPage.css";
import Layout from "../layout/Layout";

const ActivityPage = () => {
    return (
        <Layout>
            <div className="activity-list-container">
                <ProfileList />
                <ActivityList />
                <EventList />
            </div>
        </Layout>
    );
}

export default ActivityPage

