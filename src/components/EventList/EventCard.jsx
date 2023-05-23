import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const EventCard = (props) => {
  return (
    <>
      <div className="activity-event-card-detail">
        <img src={props.value.image} />
        <div className="activity-event-card-location">
          {/* <h3>{props.value.type}</h3> */}
          <h4>{props.value.title}</h4>
          <p>{props.value.location}</p>
          <p>{dayjs(props.value.date).format("dddd , D MMM YYYY")}</p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
