import { useObserver } from "mobx-react-lite";
import React from "react";
import "./NameDetails.css";

type NameDetailsProps = {
  name: string;
  gender: string;
  country: string;
};
const NameDetails: React.FC<NameDetailsProps> = ({ name, country, gender }) => {
  return useObserver(() => (
    <div className="name-details-container">
      <div className="name-details-name">
        <span>Name: {name}</span>
      </div>
      <div className="name-details-details">
        <span>Country: {country}</span>
        <span>Gender: {gender}</span>
      </div>
    </div>
  ));
};

export default NameDetails;
