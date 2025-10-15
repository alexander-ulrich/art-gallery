export default function Pagination({
  page,
  setPage,
  totalPages = 1,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number | undefined;
}) {
  return (
    <section className="mb-10">
      <div className="flex flex-row  justify-center my-10 gap-5">
        <div className="flex  max-md:flex-col gap-5">
          <button
            type="button"
            className="btn btn-secondary text-amber-900 hover:text-indigo-900 w-35"
            onClick={() => setPage(1)}
          >
            {"<< "}First Page
          </button>

          <button
            type="button"
            className="btn btn-accent text-white hover:text-indigo-900 w-35"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            {"< "}Previous Page
          </button>
        </div>
        <div className="flex md:flex-row-reverse max-md:flex-col gap-5">
          <button
            type="button"
            className="btn btn-secondary text-amber-900 hover:text-indigo-900 w-35"
            onClick={() => setPage(totalPages)}
          >
            Last Page{" >>"}
          </button>

          <button
            type="button"
            className="btn btn-accent text-white hover:text-indigo-900 w-35"
            onClick={() =>
              setPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
          >
            Next Page{" >"}
          </button>
        </div>
      </div>
      <p className="text-center text-secondary font-semibold">
        {" "}
        Current Page: {page} of {totalPages}
      </p>
    </section>
  );
}
