import React from "react";
import "../styles/CreateActivity.css";
import Layout from "../layout/Layout";
import ActivityType from "../components/CreateActivity/ActivityType";
import ActivityForm from "../components/CreateActivity/ActivityForm";

const activityFormData = [
  {
    type: "run",
    value: "running",
    icon: "fa-solid fa-person-running",
  },
  {
    type: "bike",
    value: "biking",
    icon: "fa-solid fa-bicycle",
  },
  {
    type: "swim",
    value: "swimming",
    icon: "fa-solid fa-person-swimming",
  },
  {
    type: "hike",
    value: "hiking",
    icon: "fa-sharp fa-solid fa-person-hiking",
  },
  {
    type: "boxing",
    value: "boxing",
    icon: "fa-solid fa-hand-fist",
  },
];

const CreateActivity = () => {
  return (
    <Layout>
      <ActivityForm activityFormData={activityFormData} />
    </Layout>
  );
};

export default CreateActivity;
