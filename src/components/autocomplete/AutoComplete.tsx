import { useState } from "react";
import { useDebouncedValue } from "../../hooks";
import { useClickOutside } from "react-click-outside-hook";

import "./AutoComplete.css";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [ref, hasClickedOutside] = useClickOutside();

  const debouncedSearch = useDebouncedValue(search);

  return (
    <div className="autocomplete" ref={ref}>
      <div className="autocomplete__input">
        <input
          placeholder="Search..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 && <button onClick={() => setSearch("")}>x</button>}
      </div>
      {search.length > 0 && !hasClickedOutside ? (
        <div className="autocomplete__body">
          <p>Search results</p>
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
