export type Countries = "United States" | "Germany" | "Spain";
export type Code = "us" | "de" | "es";

export interface Locations {
  label: Countries;
  code: Code;
}

export interface FilterLocation {
  label: Countries;
  code: Code;
}
export interface FilterValues {
  filterKeyword: string | null;
  filterLocation: FilterLocation
}
export interface SingleSong {
  ["im:name"]: { label: string };
  ["im:image"]: {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  ["im:itemCount"]: { label: string };
  ["im:price"]: {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  ["im:contentType"]: {
    ["im:contentType"]: {
      attributes: {
        term: string;
        label: string;
      };
    };
    attributes: {
      term: string;
      label: string;
    };
  };

  rights: { label: string };
  title: { label: string };
  link: {
    attributes: {
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      ["im:id"]: string;
    };
  };
  ["im:artist"]: {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      ["im:id"]: string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  ["im:releaseDate"]: {
    label: string;
    attributes: {
      label: string;
    };
  };
}
export interface Itunes {
  feed: {
    entry: SingleSong[];
  };
}
