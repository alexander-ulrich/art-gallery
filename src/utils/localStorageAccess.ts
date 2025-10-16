import type { PersonalArtworkType } from "../Types";

export function saveToLocalStorage(key: string, value: PersonalArtworkType[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key: string): PersonalArtworkType[] {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}

export const removeFromLocalStorage = (
  key: string,
  value: PersonalArtworkType
) => {
  const storage = getFromLocalStorage(key);
  const updatedStorage = storage.filter(
    (artwork: PersonalArtworkType) => artwork.id !== value.id
  );
  localStorage.setItem(key, JSON.stringify(updatedStorage));
};
