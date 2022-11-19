import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const results = [
    {
      image: "https://images-assets.nasa.gov/image/PIA07767/PIA07767~thumb.jpg",
    },
  ];
  it("renders an image when search function used", () => {
    render(<SearchResults results={results} />);
    expect(results).toEqual(results);
  });
});

describe("Search Results-snapshot", () => {
  it("renders Search result without an actual result", () => {
    const { asFragment } = render(<SearchResults results={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
