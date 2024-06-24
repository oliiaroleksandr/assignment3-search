import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Show = {
  id: number;
  name: string;
  timeStamp: Date;
};

type Store = {
  shows: Show[];
  addShow: (show: Show) => void;
  removeShow: (id: number) => void;
  clear: () => void;
};

export const useShowsStore = create(
  persist<Store>(
    (set) => ({
      shows: [],
      addShow: (show: Show) =>
        set((prev) => ({ ...prev, shows: [...prev.shows, show] })),
      removeShow: (id: number) =>
        set((prev) => ({
          ...prev,
          shows: prev.shows.filter((show) => show.id !== id),
        })),
      clear: () => set((prev) => ({ ...prev, shows: [] })),
    }),
    {
      name: "shows-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
