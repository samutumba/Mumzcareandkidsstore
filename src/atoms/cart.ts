import { atom } from "recoil";

export const cartState = atom({
    key: "cart",
    default: {
        items: [],
        amount: 250000
    },
});
