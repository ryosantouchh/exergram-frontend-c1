import React from "react";
import RecentHistory from "./RecentHistory";
import SummaryHealthBox from "./SummaryHealthBox";

const DashboardRight = () => {
  return (
    <div className="dashboard-right">
      <h1>Hi ! $firstName</h1>
      <RecentHistory />
      <SummaryHealthBox />
    </div>
  );
};

export default DashboardRight;
