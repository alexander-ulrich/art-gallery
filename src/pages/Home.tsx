import type { ArtResponseType } from "../Types";
import Pagination from "../components/Pagination";
import ArtworkGallery from "../components/ArtworkGallery";

export default function Home({
  page,
  setPage,
  artData,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  artData: ArtResponseType | undefined;
}) {
  return (
    <main className="my-10">
      <h1 className="text-6xl text-indigo-900 font-bold text-center pb-10">
        Art Gallery
      </h1>
      <ArtworkGallery artData={artData} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={artData?.pagination.total_pages}
      />
    </main>
  );
}
