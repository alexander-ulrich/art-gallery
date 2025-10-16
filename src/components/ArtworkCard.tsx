import { useEffect, useState } from "react";
import type { ArtworkType, PersonalArtworkType } from "../Types";

export default function ArtworkCard({
  artwork,
  baseUrl,
  personalGallery,
  setPersonalGallery,
}: {
  artwork: ArtworkType;
  baseUrl: string | null;
  personalGallery: PersonalArtworkType[];
  setPersonalGallery: React.Dispatch<React.SetStateAction<ArtworkType[]>>;
}) {
  const [inGallery, setInGallery] = useState(false);

  useEffect(() => {
    console.log("PersonalGallery from ArtworkCard: " + personalGallery);

    if (personalGallery?.some((art) => art.id === artwork.id)) {
      setInGallery(true);
    } else {
      setInGallery(false);
    }
  }, [personalGallery]);

  function handleClick() {
    //Add or Remove Artwork from localStorage
    setPersonalGallery([...personalGallery, { ...artwork, comment: "" }]);
  }

  return (
    <article className="card mb-5 bg-base-100 max-w-80 p-5 shadow-sm h-120">
      <div className="card-body min-w-[280px] relative">
        <div
          className="tooltip tooltip-accent font-semibold text-sm"
          data-tip={artwork.description?.replace(/<\/?[^>]+(>|$)/g, "")}
        >
          {artwork.image_id ? (
            <a
              target="_blank"
              href={
                baseUrl + "/" + artwork.image_id + "/full/843,/0/default.jpg"
              }
            >
              <figure className="max-h-50 hover:scale-102 duration-300">
                <img
                  className="aspect-auto"
                  src={
                    artwork.image_id
                      ? baseUrl +
                        "/" +
                        artwork.image_id +
                        "/full/843,/0/default.jpg"
                      : ""
                  }
                  alt={artwork.title ? artwork.title : "placeholder image"}
                />
              </figure>
            </a>
          ) : (
            <div className=" h-50 text-center border-1 border-accent-content">
              <span className="leading-50">no image</span>
            </div>
          )}
        </div>
        <div className="my-2">
          <h2 className="card-title text-sm font-bold">{artwork.title}</h2>
          <h3>{artwork.artist_title ? artwork.artist_title : null}</h3>

          <h3>{artwork.date_display ? artwork.date_display : null}</h3>
        </div>
        <button
          onClick={handleClick}
          disabled={inGallery}
          type="button"
          className="btn btn-accent-content w-full absolute bottom-0 left-0 font-bold"
        >
          {inGallery ? "Already favorited!" : "Add to Favorites"}
        </button>
      </div>
    </article>
  );
}
