import React from "react";
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';

function App(){
  return(
    <div className="container">
      <h2>Job Application Tracker</h2>
      <ApplicationForm />
      <hr />
      <ApplicationList />
    </div>
  );
}

export default App;