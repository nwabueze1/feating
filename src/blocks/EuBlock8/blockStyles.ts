import { makeStyles } from "@mui/styles";

export const useBlockStyles = makeStyles((theme: any) => ({
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
    overflow: "hidden",
  },
  block: {
    display: "flex",
    alignItems: "center",
    gap: "8%",
    "&.layout-2": {
      flexDirection: "row-reverse",
    },
    "&.layout-3": {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down(1030)]: {
      flexDirection: "column",
      gap: theme.spacing(5),
      "&.layout-2": {
        flexDirection: "column-reverse",
      },
      "&.layout-3": {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  blockImage: {
    width: "100%",
    height: "100%",
    "&.layout-3": {
      width: "80%",
    },

    [theme.breakpoints.down(1030)]: {
      "&.layout-3": {
        width: "80%",
        margin: "0 auto",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      "&.layout-3": {
        width: "100%",
      },
    },
  },
  testimonyContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(9),
    [theme.breakpoints.up(1545)]: {
      gap: theme.spacing(16.25),
      "&.layout-5": {
        gap: "0 !important",
      },
    },
    [theme.breakpoints.down("xl")]: {
      gap: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(3),
    },
  },
  testamentItem: {
    width: "100%",
    minWidth: "100%",
  },
}));
