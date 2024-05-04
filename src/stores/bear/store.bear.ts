import { create } from 'zustand'

interface BearState {
  blackBear: number;
  whiteBear: number;
  pandaBear: number;

  increaseBlackBear: (by:number) => void;
 
}

export const useBearStore = create<BearState>()((set) => ({
  blackBear:10,
  whiteBear:15,
  pandaBear:20,

 
  increaseBlackBear: (by:number) => set((state) => 
    ({ blackBear: state.blackBear + by })),
 
 
}))