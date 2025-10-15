import type { ArtResponseType } from "../Types";
import ArtworkCard from "./ArtworkCard";

export default function ArtworkGallery({
  artData,
}: {
  artData: ArtResponseType | undefined;
}) {
  return (
    <div className="grid auto-rows-max grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 place-items-center my-2 ">
      {artData?.data.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
