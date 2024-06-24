import { useCommentsStore } from "@/store";

import "./AutocompleteItem.css";

type Props = {
  id: number;
  email: string;
  query: string;
};

const AutocompleteItem = ({ id, email, query }: Props) => {
  const { addComment } = useCommentsStore();

  const handleClick = () => {
    addComment({ email, id, timeStamp: new Date() });
  };

  const getHighlightedEmail = (email: string, query: string) => {
    const matchedText = email.substring(0, query.length);
    const restOfText = email.substring(query.length);

    return (
      <>
        <b>{matchedText}</b>
        {restOfText}
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
