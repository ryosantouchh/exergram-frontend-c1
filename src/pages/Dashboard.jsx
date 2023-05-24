import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import Layout from "../layout/Layout";
import SummaryTrack from "../components/Dashboard/SummaryTrack";
import DashboardRight from "../components/Dashboard/DashboardRight";
import SummaryHealthBox from "../components/Dashboard/SummaryHealthBox";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const [BMI, setBMI] = useState(0);
  const [calories, setCalories] = useState(0);
  const [macronutrient, setMacronutrient] = useState(0);
  const [activities, setActivities] = useState([]);

  const authCtx = useContext(AuthContext);

  const token = `Bearer ${window.localStorage.getItem("token")}`;

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        import.meta.env.VITE_APP_BACKEND_URL + "/summary",
        {
          headers: { Authorization: token },
        }
      );

      console.log(response);
      setBMI(response.data.BMI);
      setCalories(response.data.calories_burn);
      setMacronutrient(Math.floor(response.data.BMR * 1.2));
      setActivities([...response.data.sevenDayData]);
    };

    fetchSummary();
  }, []);

  return (
    <Layout>
      <div className="dashboard-container">
        {/* <SummaryTrack /> */}
        <SummaryHealthBox
          BMI={BMI}
          calories={calories}
          macronutrient={macronutrient}
        />
        <DashboardRight activities={activities} />
      </div>
    </Layout>
  );
}

export default Dashboard;
