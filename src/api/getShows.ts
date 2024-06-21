import { Show } from "../types";

const prepareUrl = (query: string) => {
  const url = `http://api.tvmaze.com/search/shows?q=${query}`;
  return encodeURI(url);
};

type ResponseShow = {
  show: Show;
};

export const getShows = async (query: string) => {
  try {
    const response = await fetch(prepareUrl(query));

    if (!response.ok) {
      throw new Error("Failed to fetch shows");
    }

    const result: ResponseShow[] = await response.json();
    return result.map(({ show }) => show);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch shows");
  }
};
