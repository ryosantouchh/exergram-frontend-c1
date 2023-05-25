import React, { useEffect, useContext } from "react";
import ProfileCard from "./ProfileCard";
import AchieveCard from "./AchieveCard";
import QuoteCard from "./QuoteCard ";
import "./ProfileList.css";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { ActivityContext } from "../../context/ActivityContext";

const ProfileList = (props) => {
  const token = window.localStorage.getItem("token");

  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const activityCtx = useContext(ActivityContext);

  // console.log("profile");

  useEffect(() => {
    // authCtx.readFullname();

    const fetchUserData = async () => {
      if (token) {
        const response = await userCtx.fetchUserProfileData();
        userCtx.setImagePreview(response.data.image.url);
        if (!authCtx.firstName && !authCtx.lastName) {
          authCtx.setFirstName(response.data.firstname);
          authCtx.setLastName(response.data.lastname);
        }
      }
    };

    fetchUserData();
    // console.log("profile fetch");
  }, [authCtx.firstName, authCtx.lastName]);

  // useEffect(() => {
  //   if (authCtx.firstName || authCtx.lastName) {
  //     authCtx.setFirstName(authCtx.firstName);
  //     authCtx.setLastName(authCtx.lastName);
  //   }
  // }, []);

  return (
    <div className="activity-page-left-sidebar">
      <ProfileCard profileImg={userCtx.imagePreview} />
      <AchieveCard countActivity={props.countActivity} />
      <QuoteCard />
    </div>
  );
};

export default ProfileList;
