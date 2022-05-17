import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { getMovieDetails as mockGetMovieDetails } from "api/movies";
import MovieDetailsPage from "./MovieDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock("api/movies");

const mockMovieData = {
  id: 675353,
  original_title: "Sonic the Hedgehog 2",
  overview:
    "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
  popularity: 9124.409,
  poster_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
  release_date: "2022-03-30",
  runtime: 122,
  title: "Sonic the Hedgehog 2",
  vote_average: 7.7,
};

it("renders movie details correctly", async () => {
  mockGetMovieDetails.mockResolvedValue(mockMovieData);
  const { findByText } = render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <MovieDetailsPage />
      </Router>
    </QueryClientProvider>
  );
  expect(await findByText("Sonic the Hedgehog 2")).toBeInTheDocument();
});

it("returns error when api failed", async () => {
  mockGetMovieDetails.mockRejectedValue(new Error("Api Error"));
  const { findByText } = render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <MovieDetailsPage />
      </Router>
    </QueryClientProvider>
  );
  expect(await findByText("Unable to fetch data")).toBeInTheDocument();
});
