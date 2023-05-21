import axios from "axios";
import { BASE_URL } from "../configs/base.url";

// check type
const END_POINT = BASE_URL || "http://localhost:8080";

const getActivityTypeIcon = async (type) => {
  const res = await axios.get(END_POINT + "/activity_type/" + type);
  const icon = res.data.font_awesome_icon;
  console.log(icon);
  return icon;
};

export { getActivityTypeIcon };
