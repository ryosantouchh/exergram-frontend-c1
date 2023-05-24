import React from "react";
import "../styles/Dashboard.css";
import Layout from "../layout/Layout";
import SummaryTrack from "../components/Dashboard/SummaryTrack";
import DashboardRight from "../components/Dashboard/DashboardRight";
import SummaryHealthBox from "../components/Dashboard/SummaryHealthBox";

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-container">
        {/* <SummaryTrack /> */}
        <SummaryHealthBox />
        <DashboardRight />
      </div>
    </Layout>
  );
}

export default Dashboard;
