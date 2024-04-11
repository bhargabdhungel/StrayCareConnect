import { atom } from "recoil";

export const loadingAtom = atom({
    key: "loadingAtom",
    default: false,
});

export const usernameAtom = atom({
    key: "usernameAtom",
    default: "notallowed",
});