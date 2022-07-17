import { useObserver } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useRootStore } from "../../Store/RootStateContext";
import NameDetails from "../NameDetails/NameDetails";
import Searchbar from "../Searchbar/Searchbar";
import "./Form.css";

const Form = () => {
  const { namesStore } = useRootStore();

  return useObserver(() => (
    <div className="form">
      <h4>Look for some names</h4>
      <Searchbar />
      <NameDetails
        name={namesStore.actualName.name}
        gender={namesStore.actualName.gender}
        country={namesStore.actualName.country}
      />
    </div>
  ));
};

export default Form;
