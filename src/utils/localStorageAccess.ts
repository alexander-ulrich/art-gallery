import z from "zod";
import { PersonalArtworkArraySchema } from "../Schemas/ArtSchema";
import type { PersonalArtworkType } from "../Types";

export function saveToLocalStorage(key: string, value: PersonalArtworkType[]) {
  try {
    const result = PersonalArtworkArraySchema.safeParse(value);
    if (!result.success) {
      throw new Error(z.prettifyError(result.error));
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
export function getFromLocalStorage(
  key: string
): PersonalArtworkType[] | undefined {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const result = PersonalArtworkArraySchema.safeParse(JSON.parse(item));
      if (!result.success) {
        throw new Error(z.prettifyError(result.error));
      }
      return JSON.parse(item);
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [];
    }
  }
}

export const removeFromLocalStorage = (
  key: string,
  value: PersonalArtworkType
) => {
  try {
    const storage = getFromLocalStorage(key);
    const result = PersonalArtworkArraySchema.safeParse(storage);
    if (!result.success) {
      throw new Error(z.prettifyError(result.error));
    }
    const updatedStorage = storage?.filter(
      (artwork: PersonalArtworkType) => artwork.id !== value.id
    );
    localStorage.setItem(key, JSON.stringify(updatedStorage));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
