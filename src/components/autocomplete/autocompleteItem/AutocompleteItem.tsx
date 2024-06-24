import { useCommentsStore } from "../../../store";

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

  return (
    <div
      onClick={handleClick}
      className="show-item"
      dangerouslySetInnerHTML={{
        __html: email.replace(new RegExp(query, "gi"), `<b>${query}</b>`),
      }}
    />
  );
};

export default AutocompleteItem;
