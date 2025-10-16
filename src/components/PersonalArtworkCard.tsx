import { useRef, useState } from "react";
import type { ArtworkType, PersonalArtworkType } from "../Types";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorageAccess";

export default function PersonalArtworkCard({
  artwork,
  baseUrl,
  personalGallery,
  setPersonalGallery,
}: {
  artwork: PersonalArtworkType;
  baseUrl: string | null;
  personalGallery: PersonalArtworkType[];
  setPersonalGallery: React.Dispatch<React.SetStateAction<ArtworkType[]>>;
}) {
  const [comment, setComment] = useState("");
  function handleSave() {
    setPersonalGallery([
      ...personalGallery.filter((art) => art.id !== artwork.id),
      { ...artwork, comment: comment },
    ]);
  }

  function handleClick() {
    setPersonalGallery(personalGallery.filter((art) => art.id !== artwork.id));
  }
  return (
    <article className="card mb-5 bg-base-100 max-w-80 p-5 shadow-sm h-150">
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
        <label htmlFor="comment" className="font-bold">
          Your Comment:
        </label>
        <textarea
          id="comment"
          defaultValue={artwork.comment}
          onChange={(e) => setComment(e.target.value)}
          className=" border-1 border-blue-200 p-2 resize-none h-30"
        ></textarea>
        <div className="flex flex-row">
          <button
            onClick={handleSave}
            type="button"
            className="btn btn-accent w-[50%] absolute bottom-0 left-0 font-bold "
          >
            Save Comment
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary w-[45%] absolute bottom-0 right-0 font-bold"
          >
            Remove Art
          </button>
        </div>
      </div>
    </article>
  );
}
