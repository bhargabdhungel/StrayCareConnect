import { atom } from "recoil";

export const loadingAtom = atom({
  key: "loadingAtom",
  default: false,
});

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "notallowed",
});

// "" "right" "left"
export const swipeAtom = atom({
  key: "swipeAtom",
  default: "",
});

export const atTheBottomAtom = atom({
  key: "atTheBottomAtom",
  default: false,
});


export const postIdAtom = atom({
  key: "postIdAtom",
  default: null,
});

export const postTypeAtom = atom({
  key: "postTypeAtom",
  default: null,
});