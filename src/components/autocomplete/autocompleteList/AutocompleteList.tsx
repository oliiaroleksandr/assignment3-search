import { useQuery } from "@tanstack/react-query";
import { getShows } from "../api";
import { AutocompleteItem } from "../autocompleteItem";
import { useShowsStore } from "../../../store";

import "./AutocompleteList.css";

type Props = {
  query: string;
};

const ShowsList = ({ query }: Props) => {
  const { shows: savedShows } = useShowsStore();

  const {
    data: shows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shows", query],
    queryFn: () => getShows(query),
    select: (data) => {
      return data.filter((show) => {
        if (savedShows.find((savedShow) => savedShow.id === show.id)) {
          return false;
        }

        return true;
      });
    },
  });

  if (query.length === 0) return <p className="message">Enter search query</p>;
  if (isLoading) return <p className="message">Loading...</p>;
  if (error) return <p className="message message_error">{error.message}</p>;
  if (!shows || shows.length < 1)
    return <p className="message">No shows found</p>;

  return (
    <>
      {shows.map((show) => (
        <AutocompleteItem key={show.id} {...show} query={query} />
      ))}
    </>
  );
};

export default ShowsList;
