import { create } from "zustand";
import { Store } from "./models/StoreModel";

export const useStore = create<Store>()((set) => ({
  boxWidth: 400,
  boxHeight: 400,
  padding: 10,
  backgroundCanvas: null,
  backgroundContext: null,
  setBackgroundCanvas: (canvas, context) =>
    set((state) => ({
      ...state,
      backgroundCanvas: canvas,
      backgroundContext: context,
    })),
  setCanvasParams: () =>
    set((state) => ({
      ...state,
      boxWidth: 800,
      boxHeight: 800,
      padding: 10,
    })),
}));
