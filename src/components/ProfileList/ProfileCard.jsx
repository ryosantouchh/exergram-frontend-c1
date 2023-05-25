import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ActivityContext } from "../../context/ActivityContext";

const ProfileCard = (props) => {
  const authCtx = useContext(AuthContext);
  const activityCtx = useContext(ActivityContext);

  useEffect(() => {}, []);

  return (
    <>
      {props.profileImg ? (
        <img
          className="activity-profile-sidebar-img"
          src={props.profileImg}
          alt="profile image"
        />
      ) : (
        <div className="activity-profile-sidebar-non-img"></div>
      )}
      <div className="activity-profile-yourprofile">
        <div className="activity-profile-fullname">
          <h2>{`${authCtx.firstName} ${authCtx.lastName}`}</h2>
          <div className="activity-profile-underline"></div>
        </div>
        <div className="activity-profile-all_act">
          <p>All Activities</p>
          <p>{activityCtx.countActivities}</p>
        </div>
        {/* <div className="activity-profile-last_activity"> */}
        {/* <p>Last Activity</p> */}
        {/* <p>12 April 2023</p> */}
        {/* <p>Most Activity Type</p> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ProfileCard;
