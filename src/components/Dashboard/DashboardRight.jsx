import React from "react";
import RecentHistory from "./RecentHistory";
import SummaryHealthBox from "./SummaryHealthBox";

const DashboardRight = (props) => {
  return (
    <div className="dashboard-right">
      <h1>Welcome Elite Athlete</h1>
      <RecentHistory activities={props.activities} />
    </div>
  );
};

export default DashboardRight;
