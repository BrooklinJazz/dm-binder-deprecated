import { LocalStorage } from "./constants";

export const valueFromStorage = (key: LocalStorage) =>
  localStorage.getItem(key) || undefined;

export const setInStorage = (key: LocalStorage, value: string) =>
  localStorage.setItem(key, value);
