import React from "react";
import Layout from "../layout/Layout";
import ActivityPage from "./ActivityPage"
import Footer from "../components/Footer/Footer"


function Home() {
  return (
    <Layout>
      <ActivityPage />
    </Layout>
  );
}

export default Home;