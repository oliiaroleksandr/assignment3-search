import { Comment, useCommentsStore } from "@/store";

import "./SearchHistoryItem.css";

const SearchHistoryItem = ({ id, email, timeStamp }: Comment) => {
  const { removeComment } = useCommentsStore();

  const handleRemoveClick = () => {
    removeComment(id);
  };

  return (
    <li className="search-history__item">
      <h3>{email}</h3>
      <p>{timeStamp.toLocaleString()}</p>
      <button onClick={handleRemoveClick} aria-label="Remove">
        X
      </button>
    </li>
  );
};

export default SearchHistoryItem;
