import { useCommentsStore } from "@/store";
import { ApiComment } from "../api";

import "./AutocompleteItem.css";

type Props = ApiComment & {
  query: string;
};

const AutocompleteItem = ({ id, email, query }: Props) => {
  const { addComment } = useCommentsStore();

  const handleClick = () => {
    addComment({ email, id, timeStamp: new Date().toLocaleString() });
  };

  const getHighlightedEmail = (email: string, query: string) => {
    const matchedText = email.substring(0, query.length);
    const restOfEmail = email.substring(query.length);

    return (
      <>
        <b>{matchedText}</b>
        {restOfEmail}
      </>
    );
  };

  return (
    <li onClick={handleClick} className="show-item">
      {getHighlightedEmail(email, query)}
    </li>
  );
};

export default AutocompleteItem;
