import React from "react";
import "../styles/Dashboard.css";
import Layout from "../layout/Layout";
import ConsistencyBox from "../components/Dashboard/ConsistencyBox";
import ChartBox from "../components/Dashboard/ChartBox";

function Dashboard() {
  return (
    <Layout>
      <div class="dashboard-container">
        <div class="summary-track-container">
          <ConsistencyBox />

          <div class="activity-track-box">
            <div>
              <h2 style={{ fontWeight: "400" }}>ACTIVITY TRACKING</h2>
              <p>13 March 2023 - 19 March 2023</p>
            </div>

            <ChartBox />
          </div>

          <div class="summary-container">
            <div class="summary-data-box">
              <p>Total distance</p>
              <p style={{ fontWeight: "700" }}>Goal : 3 km</p>
              <div>1 km</div>
            </div>
            <div class="summary-data-box">
              <p>Total time</p>
              <p style={{ fontWeight: "700" }}>3 hrs</p>
              <div>1 km</div>
            </div>
          </div>
        </div>

        <div class="dashboard-right">
          <h1>Hi ! $firstName</h1>

          <div class="history-container">
            <h2 style={{ fontWeight: "400" }}>RECENT HISTORY</h2>

            <div class="history-card-box">
              <div class="history-card">
                <div class="activity-box">
                  <div class="activity-left">
                    <i
                      class="activity-icon fa-solid fa-person-running"
                      style={{ color: "#e8e8e8" }}
                    ></i>
                  </div>
                  <h2 style={{ fontStyle: "italic" }}>RUN</h2>
                </div>
                <div class="activity-right">
                  <h3 style={{ fontWeight: "400" }}>Today is a bright day</h3>
                  <p>20 March 2023 at 18.03</p>
                  <div class="card-stat">
                    <div>
                      <span>Distance</span>
                      <span>7.81 km</span>
                    </div>
                    <div>
                      <span>Duration</span>
                      <span>1h 37m</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="history-card">
                <div class="activity-box">
                  <div class="activity-left">
                    <i
                      class="activity-icon fa-solid fa-person-running"
                      style={{ color: "#e8e8e8" }}
                    ></i>
                  </div>
                  <h2 style={{ fontStyle: "italic" }}>RUN</h2>
                </div>
                <div class="activity-right">
                  <h3 style={{ fontWeight: "400" }}>Today is a bright day</h3>
                  <p>20 March 2023 at 18.03</p>
                  <div class="card-stat">
                    <div>
                      <span>Distance</span>
                      <span>7.81 km</span>
                    </div>
                    <div>
                      <span>Duration</span>
                      <span>1h 37m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button class="see-more-btn orange-btn">SEE MORE</button>
          </div>

          <div class="summary-box">
            <div class="summary-card">
              <div class="summary-icon">
                <i
                  class="summary-icon fa-solid fa-fire-flame-curved"
                  style={{ color: "#e8e8e8" }}
                ></i>
              </div>
              <p>Calories Burn</p>
              <p>1341 kcal</p>
            </div>
            <div class="summary-card">
              <div class="summary-icon">
                <i
                  class="summary-icon fa-solid fa-fire-flame-curved"
                  style={{ color: "#e8e8e8" }}
                ></i>
              </div>
              <p>Calories Burn</p>
              <p>1341 kcal</p>
            </div>
            <div class="summary-card">
              <div class="summary-icon">
                <i
                  class="fa-solid fa-fire-flame-curved"
                  style={{ color: "#e8e8e8" }}
                ></i>
              </div>
              <p>Calories Burn</p>
              <p>1341 kcal</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
