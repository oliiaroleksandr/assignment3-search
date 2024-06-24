import { useShows } from "../../hooks";

import "./ShowsList.css";

type Props = {
  query: string;
};

const ShowsList = ({ query }: Props) => {
  const { shows, isLoading, error } = useShows(query);

  if (query.length === 0) return <p className="message">Enter search query</p>;
  if (isLoading) return <p className="message">Loading...</p>;
  if (error) return <p className="message message_error">{error}</p>;
  if (!shows.length) return <p className="message">No shows found</p>;

  return (
    <>
      {shows.map((show) => (
        <div
          key={show.id}
          className="show-item"
          dangerouslySetInnerHTML={{
            __html: show.name.replace(
              new RegExp(query, "gi"),
              `<b>${query}</b>`
            ),
          }}
        />
      ))}
    </>
  );
};

export default ShowsList;
