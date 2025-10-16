import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageAccess";
import type { ArtworkType } from "../Types";
import PersonalArtworkCard from "../components/PersonalArtworkCard";

export default function PersonalGallery({
  personalGallery,
  setPersonalGallery,
  baseUrl,
}: {
  personalGallery: ArtworkType[];
  setPersonalGallery: React.Dispatch<React.SetStateAction<ArtworkType[]>>;
  baseUrl: string;
}) {
  useEffect(() => {
    saveToLocalStorage("personalGallery", personalGallery);
  }, [personalGallery]);
  return personalGallery.length > 0 ? (
    <>
      <h1 className="text-center mt-15 px-10 font-bold text-4xl">
        Your Personal Gallery
      </h1>
      <div className="grid auto-rows-max grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center my-20 ">
        {personalGallery.map((artwork) => (
          <PersonalArtworkCard
            key={artwork.id}
            artwork={artwork}
            baseUrl={baseUrl}
            personalGallery={personalGallery}
            setPersonalGallery={setPersonalGallery}
          />
        ))}
      </div>
    </>
  ) : (
    <div className="flex flex-col gap-5">
      <h1 className="text-center mt-50 lg:mt-100 px-10 font-bold text-4xl">
        Nothing to display!
      </h1>
      <h2 className="text-center mb-50 lg:mb-100 px-10 font-semibold text-2xl">
        Please check out our gallery and favorite the art you like!
      </h2>
    </div>
  );
}
