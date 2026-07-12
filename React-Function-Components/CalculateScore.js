import React from "react";
import "./mystyle.css";

function CalculateScore(props) {
  const average = props.Total / 5;

  return (
    <div className="container">
      <h2>Student Score Calculator</h2>
      <p><b>Name:</b> {props.Name}</p>
      <p><b>School:</b> {props.School}</p>
      <p><b>Total Marks:</b> {props.Total}</p>
      <p><b>Goal:</b> {props.Goal}</p>
      <p><b>Average:</b> {average}</p>
    </div>
  );
}

export default CalculateScore;
