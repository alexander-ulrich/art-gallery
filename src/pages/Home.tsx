import type {
  ArtResponseType,
  ArtworkType,
  PersonalArtworkType,
} from "../Types";
import Pagination from "../components/Pagination";
import ArtworkGallery from "../components/ArtworkGallery";

export default function Home({
  page,
  setPage,
  artData,
  personalGallery,
  setPersonalGallery,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  artData: ArtResponseType | undefined;
  personalGallery: PersonalArtworkType[];
  setPersonalGallery: React.Dispatch<React.SetStateAction<ArtworkType[]>>;
}) {
  return (
    <main className="my-10">
      <h1 className="text-6xl text-indigo-900 font-bold text-center pb-10">
        Art Gallery
      </h1>
      <ArtworkGallery
        artData={artData}
        personalGallery={personalGallery}
        setPersonalGallery={setPersonalGallery}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={artData?.pagination.total_pages}
      />
    </main>
  );
}
