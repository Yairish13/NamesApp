import React from "react";
import Form from "../Form/Form";
import SearchHistory from "../SearchHistory/SearchHistory";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Form />
      <SearchHistory />
    </div>
  );
};

export default Dashboard;
