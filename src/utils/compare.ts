import type { PersonalArtworkType } from "../Types";

export function compareArtObject(
  a: PersonalArtworkType,
  b: PersonalArtworkType
) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
