import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMenuListStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    height: "350px",
    overflowY: "scroll",
    scrollbarColor: props?.colors?.[100],
    padding: theme.spacing(0, 5, 0, 0),
    flex: "0 0 auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "20px",
      backgroundColor: props?.colors?.[200],
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "4px",
      backgroundColor: props?.colors?.[100],
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      height: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      padding: theme.spacing(3),
      background: props?.colors?.[300],
      boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.1)",
      borderRadius: "100px",
      margin: theme.spacing(0, 1),
    },
    "&.mobile": {
      display: "flex",
      minWidth: "100%",
      flexDirection: "row",
      height: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      padding: theme.spacing(1),
      background: props?.colors?.[300],
      borderRadius: theme.spacing(12.5),
      margin: theme.spacing(0, 1),
    },
    background: props?.colors?.[300],
    zIndex: 10,
  }),
  container: (props) => ({
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      height: "auto",
      overflowX: "auto",
      touchAction: "pan-y",
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      background: props?.colors?.[300],
      zIndex: 10,
    },
    "&.mobile": {
      display: "flex",
      flexDirection: "row",
      height: "auto",
      overflowX: "scroll",
      touchAction: "pan-y",
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      padding: theme.spacing(3, 0),
      background: props?.colors?.[300],
      boxShadow: theme.shadows[10],
    },
  }),
  mobileContainer: {
    position: "sticky",
    top: 0,
    padding: theme.spacing(1, 2),
    boxShadow: `0px 4px 64px rgba(0, 0, 0, 0.1)`,
    minWidth: "100%",
    display: "flex",
    flexDirection: "row",
    height: "auto",
    overflowX: "auto",
    touchAction: "pan-y",
    scrollBehavior: "smooth",
    flexWrap: "nowrap",
    boxSizing: "border-box",
    [theme.breakpoints.up("lg")]: {
      width: "auto",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      margin: 0,
      minWidth: "100%",
      gap: 1,
    },
    background: (props) => props?.colors?.[300],
    zIndex: 10,
  },
}));
