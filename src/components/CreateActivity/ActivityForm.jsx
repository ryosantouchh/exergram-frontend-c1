import React, { useEffect, useState, useContext } from "react";
import * as fs from "node:fs/promises";
import { useNavigate, useParams } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import validator from "validator";
import date from "date-and-time";
import ActivityRadio from "./ActivityRadio";
import { ImageContext } from "../../context/ImageContext";

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
  const [validate, setValidate] = useState({});

  const navigate = useNavigate();
  const { activityId } = useParams();

  const imgContext = useContext(ImageContext);

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImagePreview(URL.createObjectURL(event.target.files[0]));
  //     const file = event.target.files[0];
  //     setFileToBase(file);
  //   }
  // };

  // const setFileToBase = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  // };

  const handleOnChangeRadio = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCreateActivity = async () => {
    try {
      const inputError = {};

      if (validator.isEmpty(titleInput)) inputError.title = "Title is required";
      if (validator.isEmpty(dateInput)) inputError.date = "Date is required";
      if (validator.isEmpty(timeInput)) inputError.time = "Time is required";
      if (validator.isEmpty(hours) && validator.isEmpty(mins))
        inputError.duration = "Duration is required";
      if (validator.isEmpty(selectedType))
        inputError.type = "Please select at least one activity";

      if (Object.keys(inputError).length > 0) {
        setValidate(inputError);
      } else {
        setValidate({});

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

        const mock_tokem_from_touch =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1OTc1ODQsImV4cCI6MTY4NDYyNjM4NH0.iMMyWNahZeSnxmOtiAeRPM29xNlcFrbNWGb-mv9azD4";

        const response = await axios.post(
          "http://localhost:8080/activity",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: mock_tokem_from_touch,
            },
          }
        );
        // navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
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
    if (titleInput && validate.title)
      setValidate({ ...validate, title: false });
    if (dateInput && validate.date) setValidate({ ...validate, date: false });
    if (timeInput && validate.time) setValidate({ ...validate, time: false });
    if ((hours || mins) && validate.duration)
      setValidate({ ...validate, duration: false });
    if (selectedType && validate.type)
      setValidate({ ...validate, type: false });
  }, [titleInput, dateInput, timeInput, hours, mins, selectedType]);

  useEffect(() => {
    if (activityId) {
      const fetchActivityById = async () => {
        // mock token
        const mock_token =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY4NzlhZjdlMjc1Y2MzYzViMmUyNWUiLCJmaXJzdG5hbWUiOiJLaXR0aXRhdCIsImxhc3RuYW1lIjoiU3VudGltYWsiLCJpYXQiOjE2ODQ1OTc1ODQsImV4cCI6MTY4NDYyNjM4NH0.iMMyWNahZeSnxmOtiAeRPM29xNlcFrbNWGb-mv9azD4";

        const response = await axios.get(
          "http://localhost:8080/activity/" + activityId,
          { headers: { Authorization: mock_token } }
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
        {validate.type ? (
          <p className="activity-form-error-message activity-error-type">
            {validate.type}
          </p>
        ) : null}
        {activityFormData.map((item, idx) => {
          return (
            <ActivityRadio
              key={idx}
              data={item}
              selectedType={selectedType}
              handleOnChangeRadio={handleOnChangeRadio}
              validate={validate}
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
                    <div className="change-image-activity-form">
                      <label
                        htmlFor="add-pic"
                        style={{ borderRadius: "16px 0 0 16px" }}
                      >
                        <span>Change</span>
                      </label>
                      <input
                        type="file"
                        id="add-pic"
                        name="image"
                        onChange={(event) => {
                          imgContext.onImageChange(
                            event,
                            setImagePreview,
                            imgContext.setFileToBase,
                            setImage
                          );
                        }}
                      />
                      <label
                        style={{ borderRadius: "0 16px 16px 0" }}
                        onClick={() => {
                          setImage("");
                          setImagePreview(null);
                        }}
                      >
                        <span>Delete</span>
                      </label>
                    </div>
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
                      onChange={(event) => {
                        // setImage(e.target.files[0]);
                        // onImageChange(e);
                        imgContext.onImageChange(
                          event,
                          setImagePreview,
                          imgContext.setFileToBase,
                          setImage
                        );
                      }}
                    />
                  </>
                )}
              </div>
              <div className="note">
                <label htmlFor="note">
                  <p>Note</p>
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
              <div className="label-box-form">
                <label htmlFor="title">Title</label>
                {validate.title ? (
                  <p className="activity-form-error-message">
                    {validate.title}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter activity title"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                style={validate.title ? { outline: "2px solid red" } : null}
              />

              <div className="label-box-form">
                <label htmlFor="date">Date</label>
                {validate.date ? (
                  <p className="activity-form-error-message">{validate.date}</p>
                ) : null}
              </div>
              <input
                type="date"
                id="date"
                name="date"
                value={dateInput}
                onChange={(e) => convertDatePattern(e)}
                style={validate.date ? { outline: "2px solid red" } : null}
              />

              <div className="label-box-form">
                <label htmlFor="date">Time</label>
                {validate.time ? (
                  <p className="activity-form-error-message">{validate.time}</p>
                ) : null}
              </div>
              <input
                type="time"
                id="date"
                name="date"
                value={timeInput}
                onChange={(e) => convertTimePattern(e)}
                style={validate.time ? { outline: "2px solid red" } : null}
              />

              <div className="label-box-form">
                <label htmlFor="duration">Duration</label>
                {validate.duration ? (
                  <p className="activity-form-error-message">
                    {validate.duration}
                  </p>
                ) : null}
              </div>
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
                  style={
                    validate.duration ? { outline: "2px solid red" } : null
                  }
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
                  style={
                    validate.duration ? { outline: "2px solid red" } : null
                  }
                />
              </div>

              <label htmlFor="distance">Distance</label>
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
