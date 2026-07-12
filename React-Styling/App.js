import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
    return (
        <div>

            <CohortDetails
                cohortName="React Fundamentals"
                status="ongoing"
                coach="John"
                trainer="David"
            />

            <CohortDetails
                cohortName="Java Full Stack"
                status="completed"
                coach="Alex"
                trainer="Robert"
            />

        </div>
    );
}

export default App;
