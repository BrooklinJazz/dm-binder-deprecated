import { LocalStorage } from "./constants";

export const valueFromStorage = (key: LocalStorage) =>
  localStorage.getItem(key) || undefined;
