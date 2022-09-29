import { styled } from "@mui/material/styles";

export const RootStyle = styled("div")(() => ({
    width: "15rem",
    "& .MuiAutocomplete-root": {
      "& .MuiInputAdornment-root": {
        marginTop: "0 !important",
      },
      "& .MuiFilledInput-root": {
        height: "3.5rem",
        padding: "0 1rem",
      },
    },
  }));
