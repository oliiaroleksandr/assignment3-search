import { useCommentsStore } from "../../store";
import { SearchHistoryItem } from "./searchHistoryItem";

import "./SearchHistory.css";

const SearchHistory = () => {
  const { comments, clear } = useCommentsStore();

  if (comments.length === 0) {
    return null;
  }

  return (
    <div className="search-history">
      <div className="search-history__heading">
        <h3>Search History</h3>
        <button onClick={clear}>Clear search history</button>
      </div>
      <div>
        {comments.map((comment) => (
          <SearchHistoryItem key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
