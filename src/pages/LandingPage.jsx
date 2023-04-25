import React from "react";
import "../styles/LandingPage.css"
import Layout from "../layout/Layout";
import Runnerimg from "../assets/images/runnerSVG.svg"

const LandingPage = () => {
    return (
        <>
            <div className="hero-container-fluid">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="img">
                            <img src={Runnerimg} alt="" />
                        </div>

                        <div className="bg-img">
                            <div className="bg-img-r"></div>
                            <div className="bg-img-m"></div>
                            <div className="bg-img-l"></div>
                        </div>
                    </div>

                    <div className="hero-right">
                        <button className="orange-trans-btn">Join Now</button>
                    </div>
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
                        <button className="orange-btn">GET START</button>
                    </div>
                    <div className="info-right">
                        <img src="https://images.unsplash.com/photo-1474546652694-a33dd8161d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                            alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;