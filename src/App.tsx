import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PersonalGallery from "./pages/PersonalGallery";
import { useEffect, useState } from "react";
import type { ArtResponseType, PersonalArtworkType } from "./Types";
import { fetchArt } from "./utils/fetchArt";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./utils/localStorageAccess";

function App() {
  const [page, setPage] = useState(1);
  const [artData, setArtData] = useState<ArtResponseType>();
  const [personalGallery, setPersonalGallery] = useState<PersonalArtworkType[]>(
    getFromLocalStorage("personalGallery") ?? []
  );
  useEffect(() => {
    saveToLocalStorage("personalGallery", personalGallery ?? []);
  }, [personalGallery]);
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
          element={
            <Home
              page={page}
              setPage={setPage}
              artData={artData}
              personalGallery={personalGallery}
              setPersonalGallery={setPersonalGallery}
            />
          }
        />
        <Route
          path="/personal-gallery"
          element={
            <PersonalGallery
              personalGallery={personalGallery}
              setPersonalGallery={setPersonalGallery}
              baseUrl={artData ? artData.config.iiif_url : ""}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
