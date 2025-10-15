import { useEffect, useState } from "react";
import "./App.css";
import type { ArtResponseType } from "./Types";
import { fetchArt } from "./utils/fetchArt";
import ArtworkGallery from "./components/ArtworkGallery";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [page, setPage] = useState(1);
  const [artData, setArtData] = useState<ArtResponseType>();

  useEffect(() => {
    async function getNextPage() {
      const response = await fetchArt(page);
      setArtData(response);
      console.log(artData);
    }
    getNextPage();
  }, [page]);
  return (
    <>
      <Header />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={artData?.pagination.total_pages}
      />
      <ArtworkGallery artData={artData} />
      <Footer />
    </>
  );
}

export default App;
