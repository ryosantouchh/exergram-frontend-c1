import React from "react";
import "../styles/CreateActivity.css";
import Layout from "../layout/Layout";
import ActivityType from "../components/CreateActivity/ActivityType";
import ActivityForm from "../components/CreateActivity/ActivityForm";

const mockActivityFormData = [
  {
    type: "run",
    icon: "fa-solid fa-person-running",
  },
  {
    type: "bike",
    icon: "fa-solid fa-bicycle",
  },
  {
    type: "swim",
    icon: "fa-solid fa-person-swimming",
  },
  {
    type: "hike",
    icon: "fa-sharp fa-solid fa-person-hiking",
  },
  {
    type: "boxing",
    icon: "fa-solid fa-hand-fist",
  },
];

const CreateActivity = () => {
  return (
    <Layout>
      <div className="create-activity-container">
        <ActivityType mockActivityFormData={mockActivityFormData} />
        <ActivityForm />
      </div>
    </Layout>
  );
};

export default CreateActivity;
