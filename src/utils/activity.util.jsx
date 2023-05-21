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
    return `${showHour} hr ${showMin} m `;
  } else {
    const showMin = duration;
    return `${showMin} m`;
  }
};
