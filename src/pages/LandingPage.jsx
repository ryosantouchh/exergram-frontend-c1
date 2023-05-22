import React from "react";
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
import Boxing from "../assets/images/BoxingGirl.svg";

const LandingPage = () => {
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

          <a href="#">
            <button className="orange-trans-btn">Join Now</button>
          </a>
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
            <a href="#">
              <button className="get-start-btn">GET STARTED</button>
            </a>
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
            Exgram understands that your fitness journey is unique, Tailored to
            your goals and abilities, it offers customizable workouts and
            personalized training plans. Stay motivated with goal setting,
            milestones, and challenges, transforming your fitness journey into
            an exhilarating adventure. Unleash your inner warrior, conquer
            challenges, celebrate achievements, and stay focused on your path to
            greatness. Exgram empowers you to achieve unprecedented results and
            optimize your performance.
          </p>
        </div>
      </div>

      <div className="feature-info">
        <h1>Getting Started</h1>
        {/* <div className="feature-info-header"></div> */}
        <div className="feature-container">
          <div className="feature-card">
            <img src={iconTracking} alt="tracking" />
            <h2>Tracking</h2>
            <p>
              Track your workouts effortlessly with Exergram. Our intuitive
              tracking feature allows you to log your exercises, sets, reps, and
              weights with ease. Keep a detailed record of your progress and
              never miss a beat in your fitness journey. Whether you're lifting
              weights, running, or practicing yoga, our tracking feature helps
              you stay organized and motivated.
            </p>
            <br />
            <a href="#">Learn more</a>
          </div>
          <div className="feature-card">
            <img src={iconAnalysis} alt="Analysis" />
            <h2>Analysis</h2>
            <p>
              Unlock the power of data-driven insights with Exergram's analysis
              feature. Our app collects and analyzes your exercise data to
              provide valuable feedback on your performance. Discover trends,
              identify areas for improvement, and set achievable goals based on
              comprehensive analytics. Visualize your progress over time and
              make informed decisions to optimize your workouts and reach new
              heights in your fitness endeavors.
            </p>
            <br />
            <a href="#">Learn more</a>
          </div>
          <div className="feature-card">
            <img src={iconSummary} alt="Summary" />
            <h2>Summary</h2>
            <p>
              Simplify your fitness journey with Exergram's summary feature. No
              more information overload. Our app condenses complex workout data
              into easy-to-understand summaries. Get a quick overview of your
              performance, including total calories burned, workout duration,
              and key highlights. Stay informed, stay focused, and make the most
              out of your workout sessions with Exergram's concise and
              actionable summaries.
            </p>
            <br />
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>

      <div className="cta-exergram">
        <img src={Boxing} />
        <div className="cta-exergram-content">
          <h1> Take Control of Your Fitness Journey with Exergram</h1>
          <a href="#">
            <button className="cta-exergram-btn">Get Started</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
