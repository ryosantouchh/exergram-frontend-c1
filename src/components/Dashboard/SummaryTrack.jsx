import React from "react";
import ConsistencyBox from "./ConsistencyBox";
import ActivityTrackBox from "./ActivityTrackBox";
import SummaryActivityCardBox from "./SummaryActivityCardBox";

const SummaryTrack = () => {
  return (
    <div className="summary-track-container">
      <ConsistencyBox />
      <ActivityTrackBox />
      <SummaryActivityCardBox />
    </div>
  );
};

export default SummaryTrack;
