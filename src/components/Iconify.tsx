import { Icon ,IconifyIcon } from '@iconify/react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';

export default function Iconify({ icon, sx, ...other }:{ icon : IconifyIcon, sx : SxProps }) {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
  }