import React from "react";
import ProfileCard from "./ProfileCard"
import AchieveCard from "./AchieveCard";
import QuoteCard from "./QuoteCard ";
import "./ProfileList.css"



const ProfileList = () => {
    return (
        <div className="left-sidebar">
            <ProfileCard />
            <AchieveCard />
            <QuoteCard />
        </div>
    );
}

export default ProfileList


