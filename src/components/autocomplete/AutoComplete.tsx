import { useEffect, useState } from "react";
import { useDebouncedValue } from "../../hooks";
import { useClickOutside } from "react-click-outside-hook";
import { ShowsList } from "../showsList";

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
        <input
          placeholder="Search..."
          type="text"
          value={search}
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
        <ShowsList query={debouncedSearch} />
      </div>
    </div>
  );
};

export default AutoComplete;
