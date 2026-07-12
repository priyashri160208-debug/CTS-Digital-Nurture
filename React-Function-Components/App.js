import React from "react";
import CalculateScore from "./CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Priyashri"
        School="ABC Higher Secondary School"
        Total={500}
        Goal={450}
      />
    </div>
  );
}

export default App;
