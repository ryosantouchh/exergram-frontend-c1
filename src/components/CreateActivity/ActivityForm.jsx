import React, { useEffect, useState, useContext } from "react";
import * as fs from "node:fs/promises";
import { useNavigate, useParams } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import validator from "validator";
import date from "date-and-time";
import ActivityRadio from "./ActivityRadio";

const datePattern = date.compile("ddd, MMM DD YYYY");

const ActivityForm = (props) => {
  const { activityFormData } = props;

  const [titleInput, setTitleInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [meters, setMeters] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const { activityId } = useParams();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
      const file = event.target.files[0];
      setFileToBase(file);
    }
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleOnChangeRadio = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCreateActivity = async () => {
    const dataObject = {
      title: titleInput,
      type: selectedType,
      activityDate: wrapDateAndTime(),
      duration: convertDurationToMinutes(),
      note: note,
      image: image,
    };
    if (
      (kilometers !== 0 && kilometers !== "") ||
      (meters !== 0 && meters !== "")
    )
      dataObject.distance = convertDistanceToMeters();

    const form = new FormData();
    for (let key in dataObject) {
      form.append(key, dataObject[key]);
    }

    // for (let pair of form.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    const response = await axios.post("http://localhost:8080/activity", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(response);
    // navigate("/dashboard");
  };

  const convertDatePattern = (e) => {
    setDateInput(e.target.value);
  };

  const convertTimePattern = (e) => {
    setTimeInput(e.target.value);
  };

  const wrapDateAndTime = () => {
    let currentDate = new Date(dateInput + " " + timeInput);
    let utcTimestamp = currentDate.getTime();
    let utcOffsetMs = 7 * 60 * 60 * 1000;
    let gmt7Timestamp = utcTimestamp + utcOffsetMs;
    let gmt7Date = new Date(gmt7Timestamp);
    return new Date(gmt7Date);
  };

  const convertDurationToMinutes = () => {
    const totalMinutes = +mins + +hours * 60;
    return totalMinutes;
  };

  const convertDistanceToMeters = () => {
    const totalMeters = +meters + +kilometers * 1000;
    return totalMeters;
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

  const fetchDateToString = (dateAndTime) => {
    const fetchDate = date.format(new Date(dateAndTime), "YYYY-MM-DD");
    const fetchTime = date.format(new Date(dateAndTime), "HH:mm", true);
    setDateInput(fetchDate);
    setTimeInput(fetchTime);
  };

  useEffect(() => {
    if (activityId) {
      const fetchActivityById = async () => {
        const response = await axios.get(
          "http://localhost:8080/activity/" + activityId
        );
        setTitleInput(response.data.title);
        setSelectedType(response.data.type);
        fetchDateToString(response.data.activityDate);
        convertMinToHour(response.data.duration);
        setNote(response.data.note);
        if (response.data.image) setImagePreview(response.data.image.url);
        if (response.data.distance) convertMeterToKM(response.data.distance);
      };

      fetchActivityById();
    }
  }, [activityId]);

  return (
    <div className="create-activity-container">
      <div className="activity-radio-box">
        {activityFormData.map((item, idx) => {
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
      <div className="activity-form-container-fluid">
        <form action="/activity" method="POST" encType="multipart/form-data">
          <div className="activity-form-container" action="#">
            <div className="activity-form-left">
              <div className="insert-pic">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      // src={imagePreview}
                      alt=""
                      width={300}
                      style={{ borderRadius: "16px" }}
                    />
                    <label htmlFor="add-pic" style={{ height: "64px" }}>
                      <p>Change Your image</p>
                    </label>
                    <input
                      type="file"
                      id="add-pic"
                      name="image"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => {
                        onImageChange(e);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="add-pic">
                      <p>Add Your image</p>
                    </label>
                    <input
                      type="file"
                      id="add-pic"
                      name="filename"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        onImageChange(e);
                        console.log(e.target.value);
                        console.log(image);
                      }}
                    />
                  </>
                )}
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

              <label htmlFor="date">Time:</label>
              <input
                type="time"
                id="date"
                name="date"
                value={timeInput}
                onChange={(e) => convertTimePattern(e)}
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
        </form>
      </div>

      <div className="btn-container">
        {activityId ? (
          <button className="orange-btn" type="submit" value="Submit">
            Update
          </button>
        ) : (
          <button
            className="orange-btn"
            type="submit"
            value="Submit"
            onClick={() => handleCreateActivity()}
          >
            Create
          </button>
        )}
        <button
          className="other-btn"
          type="submit"
          value="Submit"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActivityForm;
