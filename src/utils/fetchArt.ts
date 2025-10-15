import z from "zod";

import { ArtResponseSchema } from "../Schemas/ArtSchema";

export async function fetchArt(page: number) {
  const url: string =
    "https://api.artic.edu/api/v1/artworks?page=" +
    page +
    "&fields=id,title,artist_display,date_display,main_reference_number,thumbnail,description,image_id";

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(
        "Something went wrong, couldn't fetch Art Data! Please try again!"
      );
    const responseData = await response.json();
    const { success, data, error } = ArtResponseSchema.safeParse(responseData);
    if (success) {
      console.log(data);
      return data;
    } else {
      throw new Error(z.prettifyError(error));
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
