import NotFoundPage from "pages/Error/404";
import HomePage from "pages/Home";
import MovieDetailsPage from "pages/MovieDetails";

const ApplicationRoutes = [
  { path: "*", component: NotFoundPage },
  { path: "/", component: HomePage },
  { path: "movie/:movieId", component: MovieDetailsPage },
];

export default ApplicationRoutes;
