import { getImageUrl } from "utils/getImageUrl";

const MovieDetails = ({ movie }) => {
  const movieReleaseYear = movie.release_date?.split("-")[0];
  return (
    <section>
      <div className="flex flex-col">
        <div className="bg-accent text-white p-3 text-xl font-semibold whitespace-normal break-words">
          {movie.original_title}
          {movieReleaseYear ? ` (${movieReleaseYear})` : null}
        </div>
        <div className="flex flex-row p-5">
          <div className="basis-1/2 lg:basis-1/4">
            <img
              className="object-cover h-auto w-full"
              src={getImageUrl(movie.poster_path, movie.title)}
              alt={movie.title}
            ></img>
          </div>
          <div className="basis-1/2 lg:basis-1/3 flex flex-col pl-3 gap-2 justify-between">
            <div className="flex flex-col">
              <span className="text-xl fond-bold mb-2 whitespace-normal break-words">
                {movie.title}
              </span>
              <span className="hidden md:flex text-sm md:text-md mb-1">
                Release: {movie.release_date}
              </span>
              <span className="text-sm md:text-md mb-1">
                Duration: {movie.runtime} mins
              </span>
              <span className="hidden md:flex text-sm font-semibold text-accent-dark text-ellipsis overflow-hidden">
                {movie.overview}
              </span>
            </div>
            <div>
              <span className="flex text-md font-bold mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#facc15"
                  fill="#facc15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                {movie.vote_average}/10
              </span>
              <button
                type="button"
                className="text-white bg-accent font-medium text-sm px-5 py-3 w-full"
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="flex md:hidden text-sm font-semibold text-accent-dark px-5 pb-3">
            {movie.overview}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
