import { create } from "zustand";

type SceneState = {
  animationDone: boolean;
  setAnimationDone: (value: boolean) => void;
  resetAnimation: () => void;
};

export const useSceneStore = create<SceneState>((set) => ({
  animationDone: false,
  setAnimationDone: (value) => set({ animationDone: value }),
  resetAnimation: () => set({ animationDone: false }),
}));
