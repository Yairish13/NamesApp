import { useObserver } from "mobx-react-lite";
import React, { useState } from "react";
import { useRootStore } from "../../Store/RootStateContext";
import "./Searchbar.css";

type SearchbarProps = {};

const Searchbar: React.FC<SearchbarProps> = () => {
  const [currentValue, setCurrentValue] = useState("");
  const { namesStore } = useRootStore();

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    namesStore.setActualName(currentValue);
    setCurrentValue("");
  };

  return useObserver(() => (
    <div className="searchbar_container">
      <form onSubmit={onSubmit}>
        <label htmlFor="header-search">Human Name</label>
        <div>
          {" "}
          <input
            type="text"
            name="searchName"
            placeholder="Search"
            value={currentValue}
            onChange={(event) => setCurrentValue(event.target.value)}
            className="nameSearchbar"
          ></input>
          <button className="check_button" type="submit">
            Check
          </button>
        </div>
      </form>
    </div>
  ));
};

export default Searchbar;
