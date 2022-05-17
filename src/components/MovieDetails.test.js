import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./MovieDetails";

const movieMockData = {
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

it("renders correctly", () => {
  const tree = renderer.create(<MovieDetails movie={movieMockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
