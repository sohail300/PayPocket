import { atom } from "recoil";

export const balanceAtom = atom<number>({
  key: "balance",
  default: 0,
});

console.log("balanceAtom instanceof atom:", balanceAtom instanceof atom);
