import axios from "axios";
// import { BASE_URL } from "../configs/base.url";

// check type
// const END_POINT = BASE_URL || "http://localhost:8080";

export const getActivityTypeIcon = async (type) => {
  const res = await axios.get("/activity_type/" + type);
  const icon = res.data.font_awesome_icon;
  console.log(icon);
  return icon;
};

export const convertDurationToShow = (duration) => {
  if (duration > 60) {
    const showHour = Math.floor(duration / 60);
    const showMin = duration % 60;
    return `${showHour} hr ${showMin} min `;
  } else {
    const showMin = duration;
    return `${showMin} min`;
  }
};

export const convertDistanceToShow = (distance) => {
  if (distance > 60) {
    const showKm = Math.floor(distance / 1000);
    const showMeter = distance % 1000;
    return showMeter !== 0 ? `${showKm} km ${showMeter} meter` : `${showKm} km`;
  } else {
    const showMeter = distance;
    return `${showMeter} meter`;
  }
};
