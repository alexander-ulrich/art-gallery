import type { ArtworkType } from "../Types";

export default function ArtworkCard({ artwork }: { artwork: ArtworkType }) {
  return (
    <article className="card mb-5 bg-base-100 max-w-80 p-5 shadow-sm min-h-100">
      <div className="card-body relative">
        <div className="">
          <h2 className="card-title text-sm font-bold">{artwork.title}</h2>
          <h3>{artwork.artist_title ? artwork.artist_title : null}</h3>

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
    </article>
  );
}
