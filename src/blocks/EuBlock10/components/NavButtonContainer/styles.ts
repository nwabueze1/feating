import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNavButtonContainerStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    "&.layout-2": {
      order: 2,
    },
    "&.layout-4": {
      order: 1,
      justifyContent: "flex-end",
      display: "flex",
      flex: 1,
    },
    "&.layout-5": {
      flex: 1,
      order: 2,
      justifyContent: "flex-end",
      display: "flex",
    },
    "&.layout-3": { marginRight: "auto" },
    order: 3,
    [theme.breakpoints.down(1200)]: {
      "&.layout-2": {
        flex: 1,
        justifyContent: "flex-end",
        display: "flex",
      },
      "&.layout-3": {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flex: 1,
      justifyContent: "flex-end",
      "&.layout-2": {
        flex: 0,
      },
      "&.layout-3,&.layout-4,&.layout-5": {
        order: 2,
        display: "unset",
      },
      "&.layout-5": {
        flex: "unset",
      },
      "&.layout-4": {
        display: "flex",
        justifyContent: "flex-end",
      },
      "&.layout-3": {
        flex: "unset",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flex: "unset",
    },
  },
}));
