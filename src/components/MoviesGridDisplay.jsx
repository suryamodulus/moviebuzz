import MoviesGridItem from "./MoviesGridItem";

const MoviesGridDisplay = ({ pages }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-0">
      {pages.map((page) => {
        return page.results.map((movie) => {
          return <MoviesGridItem key={movie.id} movie={movie}></MoviesGridItem>;
        });
      })}
    </div>
  );
};

export default MoviesGridDisplay;
