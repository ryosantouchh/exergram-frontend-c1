import React, { useEffect, useState } from "react";
import ActivityRadio from "./ActivityRadio";

const ActivityType = (props) => {
  const { mockActivityFormData, mockFormData, mockEditFormData } = props;

  const [selectedType, setSelectedType] = useState("");

  const handleOnChangeRadio = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    if (props.isEdit) {
      setSelectedType(mockEditFormData.type);
    }
  }, []);

  return (
    <div className="activity-type-container">
      <div className="activity-radio-box">
        {mockActivityFormData.map((item, idx) => {
          return (
            <ActivityRadio
              key={idx}
              data={item}
              selectedType={selectedType}
              handleOnChangeRadio={handleOnChangeRadio}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActivityType;
