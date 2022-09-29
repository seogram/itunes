import { locationMapper, getLocationOptions, api } from "./index";

const Countries = ["United States", "Germany", "Spain"];

describe("utils", () => {
  test("locationMapper - Should returns correct contry code", () => {
    expect(locationMapper(null)).toBe(undefined);
    expect(locationMapper(Countries[0])).toBe("us");
    expect(locationMapper(Countries[1])).toBe("de");
    expect(locationMapper(Countries[2])).toBe("es");
  });

  test("getLocationOptions", () => {
    expect(getLocationOptions()).toEqual(Countries);
  });
});

describe("API", () => {
  const url = "https://example.com";
  afterEach(() => {
    fetch.mockClear();
  });
  test("API should return json data", async () => {
    const mockFetch = Promise.resolve({
      json: () =>
        Promise.resolve({
          feed: {
            entry: [
              {
                category: "music",
                id: "1",
              },
            ],
          },
        }),
    });
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetch);
    const expected = { feed: { entry: [{ category: "music", id: "1" }] } };
    const data = await api(url);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(expected);
  });
  it("returns null when exception", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject("API is down"));
    const data = await api(url);
    expect(data).toEqual(undefined);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
