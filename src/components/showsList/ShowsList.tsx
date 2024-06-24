import { useQuery } from "@tanstack/react-query";
import { getShows } from "../../api";

import "./ShowsList.css";

type Props = {
  query: string;
};

const ShowsList = ({ query }: Props) => {
  const {
    data: shows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shows", query],
    queryFn: () => getShows(query),
  });

  if (query.length === 0) return <p className="message">Enter search query</p>;
  if (isLoading) return <p className="message">Loading...</p>;
  if (error) return <p className="message message_error">{error.message}</p>;
  if (!shows || shows.length < 1)
    return <p className="message">No shows found</p>;

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
