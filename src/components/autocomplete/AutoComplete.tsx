import { useEffect, useState } from "react";
import { useDebouncedValue } from "./hooks";
import { useClickOutside } from "react-click-outside-hook";
import { AutocompleteList } from "./autocompleteList";

import "./AutoComplete.css";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [isExtended, setIsExtended] = useState(false);
  const [ref, hasClickedOutside] = useClickOutside();

  const debouncedSearch = useDebouncedValue(search).trim();

  const handleCloseClick = () => {
    setIsExtended(false);
    setSearch("");
  };

  useEffect(() => {
    setIsExtended(false);
  }, [hasClickedOutside]);

  return (
    <div className="autocomplete" ref={ref}>
      <div className="autocomplete__input">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          placeholder="Search..."
          type="text"
          value={search}
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsExtended(true)}
        />
        {search.length > 0 && <button onClick={handleCloseClick}>x</button>}
      </div>
      <div
        className={`autocomplete__body ${
          isExtended ? "autocomplete__body_extended" : ""
        }`}
      >
        <AutocompleteList query={debouncedSearch} />
      </div>
    </div>
  );
};

export default AutoComplete;
