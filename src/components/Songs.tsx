import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BarFilters from "./Filters";
import { SelectChangeEvent } from "@mui/material/Select";
import { FilterValues } from "../types";

export const Songs = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <Grid container>{children}</Grid>;
};

Songs.Filter = function Filter({
  songLabels,
  limit,
  filters,
  handleChangeLimit,
  setFilters,
}: {
  songLabels: string[];
  limit: string;
  filters: FilterValues;
  handleChangeLimit: (e: SelectChangeEvent) => void;
  setFilters: (filters: FilterValues) => void;
}) {
  return (
    <Box sx={{ flexGrow: 1, p: 6 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 4, md: 1 }}
      >
        <BarFilters
          songLabels={songLabels}
          limit={limit}
          handleChangeLimit={handleChangeLimit}
          filters={filters}
          setFilters={setFilters}
        />
      </Grid>
    </Box>
  );
};

Songs.List = function List({ songs }: { songs: JSX.Element[] }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      rowSpacing={6}
      columnSpacing={{ xs: 1, sm: 3, md: 4 }}
      sx={{ flexGrow: 1, p: 6 }}
    >
      {songs}
    </Grid>
  );
};
