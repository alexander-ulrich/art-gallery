import { useEffect, useState } from "react";
import "./App.css";
import type { ArtResponseType } from "./Types";
import { fetchArt } from "./utils/fetchArt";

function App() {
  const [page, setPage] = useState(2);
  const [artData, setArtData] = useState<ArtResponseType | null>(null);

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
      <h1 className="text-center text-5xl py-5">Art Gallery</h1>
      <div className="flex flex-row gap-5 justify-center my-10">
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => setPage(1)}
          >
            First Page
          </button>
          {artData?.pagination.prev_page && (
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => setPage((prev) => (prev >= 1 ? prev - 1 : prev))}
            >
              Previous Page
            </button>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => setPage(10824)}
          >
            Last Page
          </button>

          <button
            type="button"
            className="btn btn-accent"
            onClick={() => setPage((prev) => (prev < 10824 ? prev + 1 : prev))}
          >
            Next Page
          </button>
        </div>
      </div>
      <p className="text-center">
        {" "}
        CurrentPage: {artData?.pagination.current_page}
      </p>
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  place-items-center my-5 ">
        {artData?.data.map((artwork) => (
          <div
            key={artwork.id}
            className="card rounded-b-none bg-base-100 max-w-80 shadow-sm"
          >
            <div className="card-body">
              <h2 className="card-title">{artwork.title}</h2>
              <h3>
                <span>
                  {artwork.artist_display ? artwork.artist_display : null}
                </span>
                {" | "}
                <span>
                  {artwork.date_display ? artwork.date_display : null}
                </span>
              </h3>
              {/* <p>{artwork.description ? artwork.description : null}</p> */}
            </div>
            <figure>
              <img
                className="border-2 border-amber-200 w-full aspect-video"
                src={
                  artwork.thumbnail?.lqip
                    ? artwork.thumbnail?.lqip
                    : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                }
                alt={
                  artwork.thumbnail?.alt_text
                    ? artwork.thumbnail?.alt_text
                    : "placeholder image"
                }
                // "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              />
            </figure>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
