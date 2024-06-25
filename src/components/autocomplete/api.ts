export type ApiComment = {
  id: number;
  email: string;
};

export const getComments = async (query: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?email_like=^${query}&_limit=10`
    );

    if (!response.ok) {
      throw new Error("Failed to get comments");
    }

    const result: ApiComment[] = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get comments");
  }
};
