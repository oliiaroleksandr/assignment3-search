import { useShowsStore } from "../../../store";

import "./AutocompleteItem.css";

type Props = {
  id: number;
  name: string;
  query: string;
};

const AutocompleteItem = ({ id, name, query }: Props) => {
  const { addShow } = useShowsStore();

  const handleClick = () => {
    addShow({ name, id, timeStamp: new Date() });
  };

  return (
    <div
      onClick={handleClick}
      className="show-item"
      dangerouslySetInnerHTML={{
        __html: name.replace(new RegExp(query, "gi"), `<b>${query}</b>`),
      }}
    />
  );
};

export default AutocompleteItem;
