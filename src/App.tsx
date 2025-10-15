import { useEffect, useState } from "react";
import "./App.css";
import type { ArtResponseType } from "./Types";
import { fetchArt } from "./utils/fetchArt";

function App() {
  const [page, setPage] = useState(1);
  const [artData, setArtData] = useState<ArtResponseType | undefined>();

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
      <div className="flex flex-row  justify-center my-10 gap-5">
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="btn btn-accent w-35"
            onClick={() => setPage(1)}
          >
            First Page
          </button>
          {artData?.pagination.prev_url && (
            <button
              type="button"
              className="btn btn-accent w-35"
              onClick={() => setPage((prev) => (prev >= 1 ? prev - 1 : prev))}
            >
              Previous Page
            </button>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <button
            type="button"
            className="btn btn-accent w-35"
            onClick={() => setPage(10824)}
          >
            Last Page
          </button>

          {artData?.pagination.next_url && (
            <button
              type="button"
              className="btn btn-accent w-35"
              onClick={() =>
                setPage((prev) => (prev < 10824 ? prev + 1 : prev))
              }
            >
              Next Page
            </button>
          )}
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
            className="card rounded-b-none bg-base-100 max-w-80 shadow-sm min-h-120"
          >
            <div className="card-body relative px-0">
              <div className="absolute bottom-5 left-0">
                <h2 className="card-title">{artwork.title}</h2>
                <h3>
                  {artwork.artist_display ? artwork.artist_display : null}
                </h3>

                <h3>{artwork.date_display ? artwork.date_display : null}</h3>
              </div>
              {/* <p>{artwork.description ? artwork.description : null}</p> */}
            </div>
            <div
              className="tooltip"
              data-tip={artwork.description?.replace(/<\/?[^>]+(>|$)/g, "")}
            >
              <figure>
                <img
                  className="border-2 border-amber-200 w-full aspect-video"
                  src={
                    // artwork.thumbnail?.lqip
                    //   ? artwork.thumbnail?.lqip
                    //   : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    artwork.image_id
                      ? "https://www.artic.edu/iiif/2/" +
                        artwork.image_id +
                        "/full/843,/0/default.jpg"
                      : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt={
                    artwork.thumbnail?.alt_text
                      ? artwork.thumbnail?.alt_text
                      : "placeholder image"
                  }
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
