import React, { useEffect, useContext } from "react";
import ProfileCard from "./ProfileCard";
import AchieveCard from "./AchieveCard";
import QuoteCard from "./QuoteCard ";
import "./ProfileList.css";
import { AuthContext } from "../../context/AuthContext";

const ProfileList = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    authCtx.readFullname();
  }, []);

  return (
    <div className="activity-page-left-sidebar">
      <ProfileCard />
      <AchieveCard />
      <QuoteCard />
    </div>
  );
};

export default ProfileList;
