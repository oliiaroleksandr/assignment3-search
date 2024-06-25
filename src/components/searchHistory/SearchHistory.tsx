import { useCommentsStore } from "@/store";
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
        <h2>Search History</h2>
        <button onClick={clear}>Clear search history</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <SearchHistoryItem key={comment.id} {...comment} />
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
