import { CustomThemeProps } from "../../types";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useEuBlock22Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  container: {
    width: "85%",
    margin: "0 auto",

    maxWidth: theme.euStyles.maxWidth,
    padding: theme.spacing(7, 0),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      padding: theme.spacing(4, 0),
    },
  },
  leftSection: {
    width: "47%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& h1": {
      fontSize: theme.typography.fontSize + 52,
      fontFamily: (props) => props?.fonts?.heading,
      color: (props) => props?.colors?.[100],
      lineHeight: "85px",
      marginBottom: theme.spacing(2),

      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 20,
        textAlign: "center",
        lineHeight: "normal !important",
      },
    },
    "& p": {
      fontSize: theme.typography.fontSize + 12,
      fontFamily: (props) => props?.fonts?.body,
      color: (props) => props?.colors?.[100],
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 8,
        textAlign: "center",
        paddingBottom: theme.spacing(8),
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  rightSection: {
    width: "47%",
    "& img": {
      width: "100%",
      height: 590,
      objectFit: "cover",
      [theme.breakpoints.down("lg")]: {
        height: 461,
      },
      [theme.breakpoints.down("sm")]: {
        height: 243,
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
}));
