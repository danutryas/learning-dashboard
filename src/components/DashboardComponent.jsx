import React from "react";
import DashboardTodo from "./Dashboard/DashboardTodo";
import DashboardReminder from "./Dashboard/DashboardReminder";
import TitleComponent from "./TitleComponent"
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import '../styles/pages/css/DashboardComponent.css'
import DashboardMusic from "./Dashboard/DashboardMusic";

function DashboardComponent() {
  return (
    <div className="c-dashboard">
      <div className="title">
        <TitleComponent
          name={"Dashboard"}
          icon={faWaveSquare}
          desc={"This is where you can control all the feature"}
          
        />
      </div>
      <div className="small-box">
        <DashboardTodo />
        <DashboardReminder />
        <DashboardReminder />
      </div>
      <div className="big-box">
        <DashboardMusic />
      </div>
    </div>
  );
}

export default DashboardComponent;