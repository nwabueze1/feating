import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useContactInfoStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    gap: theme.spacing(1.53375),
    alignItems: "center",
    fontFamily: theme.euDesign.font.poppins,
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(0.7),
    },
  },
  icon: {
    fontSize: theme.spacing(3.5),
    color: theme.euDesign.colors.black,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  textContainer: {
    whiteSpace: "nowrap",
    textAlign: "start",
  },
  title: {
    fontSize: theme.euDesign.typography.bodyMin,
    color: theme.euDesign.colors.neutral_700,
    fontWeight: 600,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize - 2,
    },
  },
  subTitle: {
    fontSize: theme.euDesign.typography.bodyMin,
    color: theme.euDesign.colors.secondary_main,
    margin: theme.spacing(0.2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.caption - 2,
      whiteSpace: "nowrap",
      margin: 0,
    },
  },
}));
