import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useItemStyles = makeStyles((theme: Theme) => ({
  menuBlock: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
    "&.layout-3": {
      gap: 0,
    },
    [theme.breakpoints.down("lg")]: {
      gap: theme.spacing(3),
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: theme.spacing(1),
    },
  },
  menuContent: {
    overflowX: "auto",
    width: "100%",
  },
  cardContent: {
    width: "25%",
    minWidth: "25%",
    "&.layout-2": {
      minWidth: "23%",
      width: "23%",

      [theme.breakpoints.only("xl")]: {
        minWidth: "32%",
      },
    },
    "&.layout-3": {
      minWidth: "24%",
      width: "24%",
    },
    [theme.breakpoints.up(1560)]: {
      minWidth: "30%",
    },
    [theme.breakpoints.only("xl")]: {
      minWidth: "32%",
    },
    [theme.breakpoints.down("xl")]: {
      minWidth: "50%",
      width: "50%",
      "&.layout-2": {
        minWidth: "46%",
      },
      "&.layout-3": {
        minWidth: "32%",
      },
    },
    [theme.breakpoints.down("lg")]: {
      minWidth: "70%",
      width: "70%",
      "&.layout-2": {
        minWidth: "80%",
      },
      "&.layout-3": {
        minWidth: "48%",
      },
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "70%",
      width: "70%",
      "&.layout-2,&.layout-3": {
        minWidth: "100%",
        width: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
      width: "90%",
      "&.layout-2,&.layout-3": {
        minWidth: "100%",
        width: "100%",
      },
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    touchAction: "pan-y",
    scrollBehavior: "smooth",
    gap: theme.spacing(2),
    padding: theme.spacing(1),
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&.layout-2,&.layout-3": {
      flexWrap: "wrap",
      margin: 0,
      [theme.breakpoints.up("xl")]: {
        justifyContent: "flex-start",
      },
    },
    "&.layout-3": {
      justifyContent: "space-around",
      [theme.breakpoints.only("xl")]: {
        gap: theme.spacing(1.2),
      },
    },
    [theme.breakpoints.down("md")]: {
      "&.layout-2, &.layout-3": {
        justifyContent: "center",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      "&.layout-1": {
        display: "none",
      },
    },
  },
  sectionList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
