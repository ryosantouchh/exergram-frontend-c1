import React from "react";
import Layout from "../layout/Layout";
// import ActivityPage from "./ActivityPage"
import Footer from "../components/Footer/Footer"
import LandingPage from "../pages/LandingPage"


function Home() {
  return (
    <Layout>
      <LandingPage />
      {/* <ActivityPage /> */}
    </Layout>
  );
}

export default Home;