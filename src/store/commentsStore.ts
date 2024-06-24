import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Comment = {
  id: number;
  email: string;
  timeStamp: Date;
};

type Store = {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  removeComment: (id: number) => void;
  clear: () => void;
};

export const useCommentsStore = create(
  persist<Store>(
    (set) => ({
      comments: [],
      addComment: (comment: Comment) =>
        set((prev) => ({ ...prev, comments: [...prev.comments, comment] })),
      removeComment: (id: number) =>
        set((prev) => ({
          ...prev,
          comments: prev.comments.filter((comment) => comment.id !== id),
        })),
      clear: () => set((prev) => ({ ...prev, comments: [] })),
    }),
    {
      name: "comments-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
