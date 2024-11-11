import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 5 table headers with the correct titles", () => {
  render(<App />);
  const headerStrings = [
    "Name",
    "Price",
    "Market Cap",
    "Circulating Supply",
    "Change % (24h)",
  ];
  headerStrings.forEach((string) => {
    const header = screen.getByRole("columnheader", { name: string });
    expect(header).toBeInTheDocument();
  });

  const columnHeadings = screen.getAllByRole("columnheader");
  expect(columnHeadings).toHaveLength(5);
});

// test("positive values in the change percentage show green up arrows", () => {
//   const upArrows = screen.getAllByClass("arrow-up");
//   upArrows.forEach((e) => {
//
//   });
// });

// ran out of time for this test
