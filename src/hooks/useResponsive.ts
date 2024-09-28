/** @format */

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const useResponsive = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  return { sm, md };
};
