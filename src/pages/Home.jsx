import React from "react";
import Layout from "../layout/Layout";
import ActivityPage from "./ActivityPage"


function Home() {
  return (
    <Layout>
      <div>Home Component</div>
      <ActivityPage />
    </Layout>
  );
}

export default Home;