import { atom } from "recoil";

export const subscribeData = atom({
  key: "subscribeData",
  default: { isSubscribe: false, plan: 0, isLogin: false },
});
