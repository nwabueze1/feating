import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useEmptyStateStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "400px",
    margin: "auto",
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "230px",
    },
  },
  description: {
    fontSize: "28px",
    fontWeight: theme.euDesign.typography.fontWeightBold,
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.h5,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
}));
