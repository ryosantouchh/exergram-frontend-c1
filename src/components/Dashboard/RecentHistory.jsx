import React from "react";
import { useNavigate } from "react-router-dom";
import NonImageActivityCard from "./NonImageActivityCard";

const RecentHistory = (props) => {
  const sliceActivity = (activityData) => {
    const slicedData = activityData.slice(0, 2);
    return slicedData;
  };

  const navigate = useNavigate();

  return (
    <div className="history-container">
      <h2 style={{ fontWeight: "600" }}>RECENT HISTORY</h2>

      <div className="history-card-box">
        {sliceActivity(props.activities).map((item, idx) => {
          return <NonImageActivityCard value={item} key={idx} />;
        })}
      </div>

      <button
        className="see-more-btn orange-btn"
        onClick={() => {
          navigate("/feed");
        }}
      >
        SEE MORE
      </button>
    </div>
  );
};

export default RecentHistory;
