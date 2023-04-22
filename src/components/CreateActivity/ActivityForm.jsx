import React, { useEffect, useState, useContext } from "react";
import date from "date-and-time";

const datePattern = date.compile("ddd, MMM DD YYYY");

const ActivityForm = (props) => {
  const { mockEditFormData } = props;

  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [kilometers, setKilometers] = useState(0);
  const [meters, setMeters] = useState(0);
  const [note, setNote] = useState("");

  const convertDatePattern = (e) => {
    setDateInput(e.target.value);
  };

  const convertMinToHour = (duration) => {
    const tempHours = Math.floor(duration / 60);
    const tempMins = duration % 60;
    setHours(tempHours);
    setMins(tempMins);
  };

  const convertMeterToKM = (distance) => {
    const tempKM = Math.floor(distance / 1000);
    const tempMeter = distance % 1000;
    setKilometers(tempKM);
    setMeters(tempMeter);
  };

  useEffect(() => {
    if (props.isEdit) {
      setTitleInput(mockEditFormData.title);
      setDateInput(mockEditFormData.dateTime);
      convertMinToHour(mockEditFormData.duration);
      convertMeterToKM(mockEditFormData.distance);
      setNote(mockEditFormData.note);
    }
  }, [props.isEdit]);

  return (
    <div className="activity-form-container-fluid">
      <div className="activity-form-container" action="#">
        <div className="activity-form-left">
          <div className="insert-pic">
            <label htmlFor="add-pic">
              <p>Add Your image</p>
            </label>
            <input
              type="file"
              id="add-pic"
              name="filename"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div className="note">
            <label htmlFor="note">
              <p>Note:</p>
            </label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="activity-form-right">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="enter activity title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={dateInput}
            onChange={(e) => convertDatePattern(e)}
          />

          <label htmlFor="duration">Duration:</label>
          <div className="duration">
            <input
              className="duration"
              type="number"
              id="hours"
              name="hours"
              placeholder="hours"
              min="0"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <input
              className="duration"
              type="number"
              id="minutes"
              name="minutes"
              placeholder="minutes"
              min="0"
              value={mins}
              onChange={(e) => setMins(e.target.value)}
            />
          </div>

          <label htmlFor="distance">Distance:</label>
          <div className="distance">
            <input
              className="distance"
              type="number"
              id="kilometers"
              name="kilometers"
              placeholder="kilometers"
              min="0"
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
            />
            <input
              className="distance"
              type="number"
              id="meters"
              name="meters"
              placeholder="meters"
              min="0"
              value={meters}
              onChange={(e) => setMeters(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="btn-container">
        {!props.isEdit ? (
          <button className="orange-btn" type="submit" value="Submit">
            Create
          </button>
        ) : (
          <button className="orange-btn" type="submit" value="Submit">
            Update
          </button>
        )}
        <button className="other-btn" type="submit" value="Submit">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActivityForm;
