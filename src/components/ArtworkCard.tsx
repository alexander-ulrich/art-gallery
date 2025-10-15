import type { ArtworkType } from "../Types";

export default function ArtworkCard({
  artwork,
  baseUrl,
}: {
  artwork: ArtworkType;
  baseUrl: string | null;
}) {
  function handleClick() {
    //Add or Remove Artwork from localStorage
  }
  return (
    <article className="card mb-5 bg-base-100 max-w-80 p-5 shadow-sm h-120">
      <div className="card-body min-w-[280px] relative">
        <div
          className="tooltip tooltip-accent font-semibold text-sm"
          data-tip={artwork.description?.replace(/<\/?[^>]+(>|$)/g, "")}
        >
          {artwork.image_id && (
            <a
              target="_blank"
              href={
                // "https://www.artic.edu/iiif/2/" +
                baseUrl + "/" + artwork.image_id + "/full/843,/0/default.jpg"
              }
            >
              <figure className="max-h-50 hover:scale-102 duration-300">
                <img
                  className="border-1 border-accent aspect-auto"
                  src={
                    artwork.image_id
                      ? baseUrl +
                        "/" +
                        //   "https://www.artic.edu/iiif/2/" +
                        artwork.image_id +
                        "/full/843,/0/default.jpg"
                      : ""
                  }
                  alt={
                    artwork.thumbnail?.alt_text
                      ? artwork.thumbnail?.alt_text
                      : "placeholder image"
                  }
                />
              </figure>
            </a>
          )}
        </div>
        <div className="my-2">
          <h2 className="card-title text-sm font-bold">{artwork.title}</h2>
          <h3>{artwork.artist_title ? artwork.artist_title : null}</h3>

          <h3>{artwork.date_display ? artwork.date_display : null}</h3>
        </div>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-accent-content w-full absolute bottom-0 left-0 font-bold"
        >
          Add to Favorites
        </button>
      </div>
    </article>
  );
}
