import { Comment, useCommentsStore } from "../../../store";

import "./SearchHistoryItem.css";

const SearchHistoryItem = ({ id, email, timeStamp }: Comment) => {
  const { removeComment } = useCommentsStore();

  const handleClick = () => {
    removeComment(id);
  };

  return (
    <div className="search-history__item">
      <h4>{email}</h4>
      <p>{timeStamp.toLocaleString()}</p>
      <button onClick={handleClick} aria-label="Remove">
        X
      </button>
    </div>
  );
};

export default SearchHistoryItem;
