import React from "react";
import ChartBox from "../../components/Dashboard/ChartBox";

const ActivityTrackBox = () => {
  return (
    <div className="activity-track-box">
      <div>
        <h2 style={{ fontWeight: "600" }}>ACTIVITY TRACKING</h2>
        <p>13 March 2023 - 19 March 2023</p>
      </div>
      <ChartBox />
    </div>
  );
};

export default ActivityTrackBox;
