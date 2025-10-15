import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PersonalGallery from "./pages/PersonalGallery";
import { useEffect, useState } from "react";
import type { ArtResponseType } from "./Types";
import { fetchArt } from "./utils/fetchArt";

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
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<Home page={page} setPage={setPage} artData={artData} />}
        />
        <Route path="/personal-gallery" element={<PersonalGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
