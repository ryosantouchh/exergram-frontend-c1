import React, { useContext, useState, useEffect } from "react";
import Badge1 from "../../assets/images/Badge1.svg";
import Badge2 from "../../assets/images/Badge2.svg";
import Badge3 from "../../assets/images/Badge3.svg";
import Badge4 from "../../assets/images/Badge4.svg";

import { ActivityContext } from "../../context/ActivityContext";

const AchieveCard = (props) => {
  const { countActivity } = props;
  console.log(countActivity);

  const [achievement, setAchievement] = useState("");
  const [badgeImg, setBadgeImg] = useState("");

  const activityCtx = useContext(ActivityContext);
  console.log("achievementcard");

  const checkAchievementCondition = () => {
    // if ()
    const countAll = activityCtx.countActivities;

    console.log(countAll);

    if (countActivity >= 11) {
      setAchievement("Ultimate Athletes");
      setBadgeImg(Badge4);
      return;
    }
    if (countActivity >= 10) {
      setAchievement("Ultimate Athletes");
      setBadgeImg(Badge3);
      return;
    }
    if (countActivity >= 7) {
      setAchievement("Ultimate Athletes");
      setBadgeImg(Badge2);
      return;
    }
    if (countActivity >= 3) {
      setAchievement("First Step");
      setBadgeImg(Badge1);
      return;
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      checkAchievementCondition();
      console.log("log");
    }
  }, []);

  return (
    <div className="activity-achieve-card ">
      <h3>Achievement</h3>
      <img
        className="activity-achieve-badge-img"
        src={badgeImg}
        alt="img profile"
      />
      <div className="badgeText">{activityCtx.all_activity}</div>
    </div>
  );
};
export default AchieveCard;
