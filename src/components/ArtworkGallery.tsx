import PersonalGallery from "../pages/PersonalGallery";
import type {
  ArtResponseType,
  ArtworkType,
  PersonalArtworkType,
} from "../Types";
import ArtworkCard from "./ArtworkCard";

export default function ArtworkGallery({
  artData,
  personalGallery,
  setPersonalGallery,
}: {
  artData: ArtResponseType | undefined;
  personalGallery: PersonalArtworkType[];
  setPersonalGallery: React.Dispatch<React.SetStateAction<ArtworkType[]>>;
}) {
  return (
    <div className="grid auto-rows-max grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center my-10 ">
      {artData?.data.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          baseUrl={artData.config.iiif_url}
          personalGallery={personalGallery}
          setPersonalGallery={setPersonalGallery}
        />
      ))}
    </div>
  );
}
