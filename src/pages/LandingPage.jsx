import React from "react";
import "../styles/LandingPage.css";
import Layout from "../layout/Layout";
import Runnerimg from "../assets/images/runnerSVG.svg";
import BackgroundShape1 from "../assets/images/bgShape1.svg";
import BackgroundShape2 from "../assets/images/bgShape2.svg";
import ExergramMainLogo from "../assets/images/ExergramMainLogo.svg";
import Swimmingimg from "../assets/images/Swimming.svg";
import Background from "../assets/images/background.svg";
import Dashboarad from "../assets/images/exergramMock1.svg";
import ActivitiesBoard from "../assets/images/exergramMock2.svg";
import AppExample from "../assets/images/appMock.svg";

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
          <button className="orange-trans-btn">Join Now</button>
        </div>
      </div>

      <div className="info-container-fluid">
        <div className="info-container">
          <div className="info-left">
            <h2>SET GOALS.</h2>
            <h2>LOG WORKOUTS.</h2>
            <h2>STAY ON TRACK.</h2>
            <p>
              Easily track your Workouts, set <br />
              Training Plans, and discover new <br />
              Workout Routines to crush your goals.
            </p>
            <br />
            <button className="get-start-btn">GET START</button>
          </div>
          <div className="info-right">
            {/* <img src={Dashboarad} alt="" />
            <img src={ActivitiesBoard} alt="" /> */}
            <img className="app-example" src={AppExample} alt="" />
          </div>
        </div>
      </div>

      <div className="ad-workout">
        <img src={Swimmingimg} alt="Workout" />
        <div className="ad-text">
          <h1>
            WORK <br /> OUT
          </h1>
        </div>
      </div>

      <div className="community-event">
        <h1>Community & Events</h1>

        <div className="event-cards">
          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-info">
              <img class="card-img-top" src="src\assets\images\mockEvent.png" />
              <div class="card-block">
                <h4 class="card-title">Tawshif Ahsan Khan</h4>

                <div class="card-text">
                  Tawshif is a web designer living in Tawshif is a web designer
                  living in Tawshif is a web designer living in Tawshif is a web
                  designer living in .............
                </div>
              </div>
              <div class="card-footer">
                <span class="float-right">
                  <a href="#">read continue...</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
