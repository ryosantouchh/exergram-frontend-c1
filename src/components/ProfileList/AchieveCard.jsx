import React, { useState, useEffect } from "react";
import Badge4SVG from "../../assets/images/Badge4.svg";
import Badge3SVG from "../../assets/images/Badge3.svg";
import Badge2SVG from "../../assets/images/Badge2.svg";
import Badge1SVG from "../../assets/images/Badge1.svg";

const AchieveCard = () => {
    const [loginDays, setLoginDays] = useState(0);

    let badgeImg = "";
    let badgeText = "";

    if (loginDays >= 6) {
        badgeImg = Badge4SVG;
        badgeText = "Ultimate Mastery!";
    } else if (loginDays >= 4) {
        badgeImg = Badge3SVG;
        badgeText = "Remarkable Achievement!";
    } else if (loginDays >= 2) {
        badgeImg = Badge2SVG;
        badgeText = "Goal Attained!";
    } else if (loginDays >= 0) {
        badgeImg = Badge1SVG;
        badgeText = "Dedicated Pursuit!";
    }

    return (
        <div className="activity-achieve-card">
            <h3>Achievement</h3>
            <img className="activity-achieve-badge-img" src={badgeImg} alt="" />
            <div className="badgeText">{badgeText}</div>
        </div>
    );
};

export default AchieveCard;
