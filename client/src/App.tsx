import React from "react";
import "./App.css";
import { useObserver } from "mobx-react-lite";
import Dashboard from "./components/Dashboard/Dashboard";

const App: React.FC = () => {
  return useObserver(() => (
    <>
      <Dashboard />
    </>
  ));
};

export default App;
