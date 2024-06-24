import { useShowsStore } from "../../store";
import { SearchHistoryItem } from "./searchHistoryItem";

import "./SearchHistory.css";

const SearchHistory = () => {
  const { shows, clear } = useShowsStore();

  if (shows.length === 0) {
    return null;
  }

  return (
    <div className="search-history">
      <div className="search-history__heading">
        <h3>Search History</h3>
        <button onClick={clear}>Clear search history</button>
      </div>
      <div>
        {shows.map((show) => (
          <SearchHistoryItem key={show.id} {...show} />
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
