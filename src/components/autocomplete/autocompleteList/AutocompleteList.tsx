import { useQuery } from "@tanstack/react-query";
import { AutocompleteItem } from "../autocompleteItem";
import { getComments } from "../api";
import { useCommentsStore } from "@/store";

import "./AutocompleteList.css";

type Props = {
  query: string;
};

const AutocompleteList = ({ query }: Props) => {
  const { comments: savedComments } = useCommentsStore();

  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments", query],
    queryFn: () => getComments(query),
    select: (data) => {
      return data.filter((show) => {
        if (savedComments.find((savedComment) => savedComment.id === show.id)) {
          return false;
        }

        return true;
      });
    },
  });

  if (query.length === 0) return <p className="message">Enter search query</p>;
  if (isLoading) return <p className="message">Loading...</p>;
  if (error) return <p className="message message_error">{error.message}</p>;
  if (!comments || comments.length < 1)
    return <p className="message">No comments found</p>;

  return (
    <ul>
      {comments.map((show) => (
        <AutocompleteItem key={show.id} {...show} query={query} />
      ))}
    </ul>
  );
};

export default AutocompleteList;
