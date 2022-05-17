import { Link } from "react-router-dom";

const MoviesGridItem = ({ movie }) => {
  return (
    <Link to={`movie/${movie.id}`} className="flex">
      <img
        className="w-full"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : `https://via.placeholder.com/185x278/746A64/ffffff?text=${movie.original_title}`
        }
        alt={movie.original_title}
      ></img>
    </Link>
  );
};

export default MoviesGridItem;
