import React, { useState } from "react";
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

const mockEditFormData = {
  title: "Banchamek gym",
  type: "boxing",
  duration: 97,
  distance: 1200,
  note: "day 10 in muay thai",
  dateTime: "2023-03-24",
};

const EditActivity = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <Layout>
      <div className="create-activity-container">
        <ActivityType
          mockActivityFormData={mockActivityFormData}
          mockEditFormData={mockEditFormData}
          isEdit={isEdit}
        />
        <ActivityForm mockEditFormData={mockEditFormData} isEdit={isEdit} />
      </div>
    </Layout>
  );
};

export default EditActivity;
