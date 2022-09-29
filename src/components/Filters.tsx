import { useState } from "react";
import filterIcon from "@iconify/icons-carbon/filter";
import { Stack, Button, Drawer, Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Iconify from "./Iconify";
import LimitFilter from "./LimitFilter";
import ListingLocationsFilter from "./LocationsFilter";
import KeywordFilter from "./KeywordFilter";
import { DRAWER_WIDTH } from "../config";
import { Locations, Countries, Code, FilterValues } from "../types";
import { getLocationOptions, locationMapper } from "../utils";

export default function BarFilters({
  songLabels,
  limit,
  handleChangeLimit,
  filters,
  setFilters,
}: {
  songLabels: string[];
  limit: string;
  handleChangeLimit: (e: SelectChangeEvent) => void;
  filters: FilterValues;
  setFilters: (filters: FilterValues) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const handleChangeKeyword = (keyword: string | null) => {
    setFilters({
      ...filters,
      filterKeyword: keyword ?? null,
    });
  };

  const handleChangeLocation = (location: Countries | null) => {
    const selectedCountry = locationMapper(location);
    const payload: Locations = {
      label: location ?? "United States",
      code: selectedCountry ?? "us",
    };
    setFilters({
      ...filters,
      filterLocation: payload,
    });
  };

  const renderFilters = (
    <Stack
      spacing={2.5}
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
    >
      <LimitFilter limit={limit} handleChangeLimit={handleChangeLimit} />
      <ListingLocationsFilter
        locationOptions={getLocationOptions()}
        filterLocation={filters.filterLocation}
        onChangeLocation={handleChangeLocation}
      />
      <KeywordFilter
        keywordOptions={songLabels}
        filterKeyword={filters.filterKeyword}
        onChangeKeyword={handleChangeKeyword}
      />
    </Stack>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          pt: 5,
          pl: 2,
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {renderFilters}
      </Box>

      {/* -- Mobile -- */}
      <Stack
        alignItems="flex-end"
        sx={{
          py: 1.5,
          display: { md: "none" },
        }}
      >
        <Button
          color="inherit"
          variant="contained"
          size="large"
          startIcon={
            <Iconify icon={filterIcon} sx={{ width: 20, height: 20 }} />
          }
          onClick={handleMobileOpen}
        >
          filters
        </Button>
      </Stack>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            pt: 5,
            px: 3,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
