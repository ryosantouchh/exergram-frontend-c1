import React, { useContext, useEffect } from "react";
import "../styles/CreateActivity.css";
import Layout from "../layout/Layout";
import ActivityForm from "../components/CreateActivity/ActivityForm";
import { ActivityContext } from "../context/ActivityContext";

const CreateActivity = () => {
  const activityCtx = useContext(ActivityContext);

  useEffect(() => {
    const fetchType = async () => {
      const res = await activityCtx.fetchAllType();
    };
    if (activityCtx.activityType.length === 0) fetchType();
  }, []);

  return (
    <Layout>
      <ActivityForm activityType={activityCtx.activityType} />
    </Layout>
  );
};

export default CreateActivity;
