import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { api } from "./utils";
import { Itunes, SingleSong, FilterValues } from "./types";
import { songItemMaker } from "./components/SongItem";
import { Songs } from "./components/Songs";
import { DEFAULT_LIMIT_SIZE } from "./config";

const defaultFilterValues: FilterValues = {
  filterKeyword: null,
  filterLocation: {
    label: "United States",
    code: "us",
  },
};

const songsLabelMaker = (songs: SingleSong[]) => {
  return songs.map((song: SingleSong) => song.title.label);
};

const App = (): JSX.Element => {
  const [songs, setSongs] = useState<SingleSong[]>([]);
  const [limit, setLimit] = useState<string>(DEFAULT_LIMIT_SIZE);
  const [filters, setFilters] = useState<FilterValues>(defaultFilterValues);

  const getSongData = async (): Promise<void> => {
    const url = `https://itunes.apple.com/${filters.filterLocation.code}/rss/topalbums/limit=${limit}/json`;
    const data = await api<Itunes>(url);
    const songs: SingleSong[] = data?.feed?.entry || [];
    const songsByLabel: SingleSong[] = songs.filter(
      (song) => song.title.label === filters.filterKeyword
    );
    if (filters.filterKeyword === null) {
      setSongs(songs);
    } else {
      setSongs(songsByLabel);
    }
  };

  useEffect(() => {
    getSongData();
  }, [limit, filters.filterLocation, filters.filterKeyword]);

  return (
    <Songs>
      <Songs.Filter
        songLabels={songsLabelMaker(songs)}
        limit={limit}
        filters={filters}
        handleChangeLimit={(e: SelectChangeEvent) => setLimit(e.target.value)}
        setFilters={setFilters}
      />
      <Songs.List songs={songItemMaker(songs)} />
    </Songs>
  );
};

export default App;
