import React from "react";
import eventImg from "../../assets/images/mockEvent.png";
import "./CommuEventCard.css";

const CommunityAndEvent = () => {
  return (
    <>
      <div className="community-event">
        <h1>Community & Events</h1>
        <div className="event-cards">
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
          <CommunAndEventCard />
        </div>
      </div>
    </>
  );
};

const CommunAndEventCard = () => {
  const CEName = [
    {
      name: "Tawshif Ahsan Khan",
      news: "Tawshif is a web designer living in Tawshif is a web designerliving in Tawshif is a web designer living in Tawshif is a web designer living in .............",
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card-info">
          <img className="card-img-top" src={eventImg} />
          <div className="card-block">
            <h4 className="card-title">{CEName[0].name}</h4>

            <div className="card-text">{CEName[0].news}</div>
          </div>
          <div className="card-footer">
            <span className="float-right">
              <a href="#">read continue</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityAndEvent;
