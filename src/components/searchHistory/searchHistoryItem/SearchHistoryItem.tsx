import { Show, useShowsStore } from "../../../store";

import "./SearchHistoryItem.css";

const SearchHistoryItem = ({ id, name, timeStamp }: Show) => {
  const { removeShow } = useShowsStore();

  const handleClick = () => {
    removeShow(id);
  };

  return (
    <div className="search-history__item">
      <h4>{name}</h4>
      <p>{timeStamp.toLocaleString()}</p>
      <button onClick={handleClick} aria-label="Remove">
        X
      </button>
    </div>
  );
};

export default SearchHistoryItem;
