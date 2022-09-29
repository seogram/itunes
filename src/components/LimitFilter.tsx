import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import {RootStyle} from './StyleWrapper';
// ----------------------------------------------------------------------
export default function LimitFilter({
  limit,
  handleChangeLimit,
}: {
  limit: string;
  handleChangeLimit: (e: SelectChangeEvent) => void;
}) {
  return (
    <RootStyle>
      <FormControl sx={{ minWidth: 100 }}>
        <Select labelId="limit" value={limit} onChange={handleChangeLimit}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </RootStyle>
  );
}
