import { render, act } from "@testing-library/react";
import App from "./App";

const singleSong = {
  ["im:name"]: { label: "label1" },
  ["im:image"]: [
    {
      label: "image label",
      attributes: {
        height: "50",
      },
    },
  ],

  title: { label: "title" },

  id: {
    label: "id",
    attributes: {
      ["im:id"]: "id",
    },
  },
  ["im:artist"]: {
    label: "artist",
    attributes: {
      href: "href",
    },
  },
  category: {
    attributes: {
      ["im:id"]: "id",

      label: "label",
    },
  },
};
const mockFetch = Promise.resolve({
  json: () =>
    Promise.resolve({
      feed: {
        entry: [singleSong],
      },
    }),
});
test("renders the landing page", () => {
  render(<App />);
});

describe("App", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("renders Song Items", async () => {
    const { getByTestId } = await act(async () => render(<App />));
    const listNode = getByTestId("songTitle");
    expect(listNode).toBeInTheDocument();
    expect(listNode).toHaveTextContent("title");
  });
});
