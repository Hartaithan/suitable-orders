import { create } from "zustand";
import { Store } from "./models/StoreModel";

export const useStore = create<Store>()((set) => ({
  backgroundCanvas: null,
  backgroundContext: null,
  setBackgroundCanvas: (canvas, context) =>
    set((state) => ({
      ...state,
      backgroundCanvas: canvas,
      backgroundContext: context,
    })),
}));
