import type z from "zod";
import type {
  ArtConfigSchema,
  ArtDataSchema,
  ArtInfoSchema,
  ArtPaginationSchema,
  ArtResponseSchema,
  ArtworkSchema,
  PersonalArtworkSchema,
  ThumbnailSchema,
} from "../Schemas/ArtSchema";

export type ArtPaginationType = z.infer<typeof ArtPaginationSchema>;
export type ThumbnailType = z.infer<typeof ThumbnailSchema>;
export type ArtworkType = z.infer<typeof ArtworkSchema>;
export type ArtDataType = z.infer<typeof ArtDataSchema>;
export type ArtInfoType = z.infer<typeof ArtInfoSchema>;
export type ArtConfigType = z.infer<typeof ArtConfigSchema>;
export type ArtResponseType = z.infer<typeof ArtResponseSchema>;
export type PersonalArtworkType = z.infer<typeof PersonalArtworkSchema>;
