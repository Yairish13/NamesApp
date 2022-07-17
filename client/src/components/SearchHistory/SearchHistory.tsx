import { useObserver } from "mobx-react-lite";
import React from "react";
import { useRootStore } from "../../Store/RootStateContext";
import NameDetails from "../NameDetails/NameDetails";
import "./SearchHistory.css";

const SearchHistory: React.FC = () => {
  const { namesStore } = useRootStore();
  return useObserver(() => (
    <div className="search-history">
      <h4>Searches History</h4>
      <div className="searches_container">
        {" "}
        {namesStore.namesHistory.map(({ name, gender, country }) => (
          <NameDetails
            key={name}
            gender={gender}
            country={country}
            name={name}
          />
        ))}
      </div>
    </div>
  ));
};

export default SearchHistory;
