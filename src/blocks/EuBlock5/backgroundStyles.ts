import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBackgroundStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  backgroundImage: {
    position: "absolute",
    right: "-5%",
    bottom: "-11%",
    width: "8%",
    "&.layout-3,&.layout-4,&.layout-5": {
      right: "unset",
      left: "-5%",
    },
    [theme.breakpoints.down("xl")]: {
      bottom: "unset",
      top: "-3%",
      right: "-3%",
      "&.layout-3": {
        right: "-5%",
        left: "unset",
      },
      "&.layout-4,&.layout-5": {
        top: "unset",
        left: "2%",
        bottom: "-5%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&.layout-1": {
      position: "absolute",
    },
  },
  redBackground: (props) => ({
    background: props.colors[900],
    height: 15,
    width: 15,
    borderRadius: 5,
    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
    position: "absolute",
    top: "-7%",
    right: "-3%",
    "&.layout-3,&.layout-2,&.layout-1": {
      top: "-3%",
      right: "-2%",
    },
    "&.dot-2": {
      left: "35%",
      bottom: "-7%",
      top: "unset",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  }),
  goldBackground: (props) => ({
    background: props.colors[900],
    height: 15,
    width: 15,
    borderRadius: 5,
    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
    position: "absolute",
    top: "-10%",
    left: "40%",
    [theme.breakpoints.down("xl")]: {
      bottom: "-4%",
      right: "-2%",
      top: "unset",
      left: "unset",
      "&.dot-2": {
        bottom: "-2%",
        right: "8%",
      },
      zIndex: 0.5,
    },
    "&.dot-2": {
      top: "44%",
      left: "-4%",
      [theme.breakpoints.down("xl")]: {
        top: "-2%",
        bottom: "-4%",
        "&.layout-4,&.layout-5": {
          top: "-4% !important",
          left: "-4% !important",
        },
        "&.dot-2": {
          top: "-3%",
          left: "-3%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
}));
