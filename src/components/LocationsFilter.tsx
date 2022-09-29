import locationIcon from "@iconify/icons-carbon/location";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import Iconify from "./Iconify";
import { FilterLocation, Countries } from "../types";
import {RootStyle} from './StyleWrapper';

// ----------------------------------------------------------------------

export default function ListingLocationsFilter({
  filterLocation,
  onChangeLocation,
  locationOptions,
}: {
  filterLocation: FilterLocation;
  onChangeLocation: (location: Countries | null) => void;
  locationOptions: Countries[];
}) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={locationOptions}
        getOptionLabel={(option) => option}
        value={filterLocation.label || ""}
        onChange={(event, value) => onChangeLocation(value)}
        renderInput={(params) => (
          <TextField
            type="text"
            {...params}
            variant="filled"
            placeholder="Country"
            InputProps={{
              ...params.InputProps,
              autoComplete: "off",
              startAdornment: (
                <InputAdornment position="end">
                  <Iconify
                    icon={locationIcon}
                    sx={{
                      width: 24,
                      height: 24,
                      color: "text.disabled",
                      flexShrink: 0,
                      mr: 1,
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </RootStyle>
  );
}
