import searchIcon from "@iconify/icons-carbon/search";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import Iconify from "./Iconify";
import {RootStyle} from './StyleWrapper';

export default function KeywordFilter({
  filterKeyword,
  onChangeKeyword,
  keywordOptions,
}: {
  filterKeyword: string | null;
  onChangeKeyword: (keyword: string | null) => void;
  keywordOptions: string[];
}) {
  return (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={keywordOptions}
        getOptionLabel={(option) => option}
        value={filterKeyword || ""}
        onChange={(_, value) => onChangeKeyword(value)}
        renderInput={(params) => (
          <TextField
            type="text"
            {...params}
            variant="filled"
            placeholder="Search name..."
            InputProps={{
              ...params.InputProps,
              autoComplete: "off",
              startAdornment: (
                <InputAdornment position="end">
                  <Iconify
                    icon={searchIcon}
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
