import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import Layout from "../layout/Layout";
import Runnerimg from "../assets/images/runnerSVG.svg";
import ExergramMainLogo from "../assets/images/ExergramMainLogo.svg";
import Swimmingimg from "../assets/images/Swimming.svg";
import Background from "../assets/images/background.svg";
import AppExample from "../assets/images/appMock.svg";
import iconAnalysis from "../assets/images/iconAnalysis.svg";
import iconSummary from "../assets/images/iconSummary.svg";
import iconTracking from "../assets/images/iconTracking.svg";
import RunningMan from "../assets/images/RunningMan.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  // const navigateToSignup = () => {
  //   navigate("/signup");
  // };

  return (
    <>
      <div className="hero-container-fluid"></div>
      <div className="hero-container">
        <div className="bg-img">
          <img className="background" src={Background} alt="" />
        </div>
        <div className="hero-left">
          <div className="img">
            <img className="runner" src={Runnerimg} alt="" />
          </div>
        </div>

        <div className="hero-right">
          <img className="exergram-main-logo" src={ExergramMainLogo} alt="" />

          <button
            className="orange-trans-btn"
            onClick={() => navigate("/signup")}
          >
            Join Now
          </button>
        </div>
      </div>

      <div className="info-container-fluid">
        <div className="info-container">
          <div className="info-left">
            <h2>SET GOALS.</h2>
            <h2>LOG WORKOUTS.</h2>
            <h2>STAY ON TRACK.</h2>
            <p>
              Easily track your Workouts, set Training Plans, and discover new
              workout routines to crush your goals.
            </p>
            <br />

            <button
              className="get-start-btn"
              onClick={() => navigate("/signup")}
            >
              GET STARTED
            </button>
          </div>
          <div className="info-right">
            <img className="app-example" src={AppExample} alt="" />
          </div>
        </div>
      </div>

      <div className="ad-workout">
        <img src={Swimmingimg} alt="Workout" />
        <div className="ad-workout-info">
          <h1>UNLEASH</h1>
          <p>
            Customize, set goals, and conquer challenges with Exergram. Achieve
            results with personalized training plans. Join now to unleash your
            inner power and start your workout adventure.
          </p>
        </div>
      </div>

      <div className="landing-feature-info">
        <h1>Features</h1>
        <div className="landing-feature-container">
          <div className="landing-feature-card">
            <img src={iconTracking} alt="tracking" />
            <h2>Tracking</h2>
            <p>
              Track workouts effortlessly with Exergram. Log exercises, sets,
              reps, and weights easily. Stay organized and motivated on your
              fitness journey.
            </p>
            <br />
            {/* <a href="#">Learn more</a> */}
          </div>
          <div className="landing-feature-card">
            <img src={iconAnalysis} alt="Analysis" />
            <h2>Analysis</h2>
            <p>
              Get data-driven insights with Exergram's analysis feature. Analyze
              exercise data for feedback, trends, and goal setting. Optimize
              workouts and track progress for fitness success.
            </p>
            <br />
            {/* <a href="#">Learn more</a> */}
          </div>
          <div className="landing-feature-card">
            <img src={iconSummary} alt="Summary" />
            <h2>Summary</h2>

            <p>
              Simplify your fitness journey with Exergram's summary feature. Get
              concise workout summaries with key highlights, calories burned,
              and duration. Stay focused and make the most of your workouts with
              easy-to-understand information.
            </p>

            <br />
            {/* <a href="#">Learn more</a> */}
          </div>
        </div>
      </div>

      <div className="cta-exergram">
        <img src={RunningMan} alt="running-man" />
        <div className="cta-exergram-content">
          <h1> Take Control of Your Fitness Journey with Exergram</h1>

          <button
            className="cta-exergram-btn"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
