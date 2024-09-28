import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "types";

export const useDrawerStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 999,
    height: "100vh",
    background: "red",
    width: "70vw",
    backgroundColor: props?.colors?.[100],
    boxShadow: `-2px 3px 4px ${theme.euDesign.getShadow(0.3)}`,
  }),
  container: {
    maxWidth: "89%",
    paddingTop: "5vh",
  },
  navList: {
    listStyle: "none",
    margin: theme.spacing(0, 0, 0, "auto"),
    width: "fit-content",
  },
  navListItem: {
    margin: theme.spacing(3, 0),
    textAlign: "end",
    width: "100%",
  },
  navLink: (props) => ({
    fontSize: theme.euDesign.typography.h5,
    textDecoration: "none",
    color: props?.colors?.[200],
    fontFamily: props?.fonts?.body,
    cursor: "pointer",
    transition: "color .5s ease-in",
    "&:hover": {
      color: props?.colors?.[700],
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5 - 4,
    },
  }),
  closeIcon: (props) => ({
    color: props?.colors?.[300],
    cursor: "pointer",
    fontSize: theme.typography.fontSize * 2,
    transition: "transform .5s ease-in",
    "&:hover": {
      transform: "scale(1.2)",
    },
  }),
  growIn: {
    transformOrigin: "0 0 0",
    "&:enter": {
      transform: "scale(0)",
    },
    "&:enter-active": {
      transform: "scale(1)",
      transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    "&:exit": {
      transform: "scale(1)",
    },
    "&:exit-active": {
      transform: "scale(0)",
      transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  block: (props) => ({
    backgroundColor: props?.colors?.[900],
    width: "100%",
    height: "100vh",
    zIndex: -1,
  }),
  navCloseParent: (props) => ({
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4),
    width: "fit-content",
    marginLeft: "auto",
    cursor: "pointer",

    "& .close-icon": {
      fontSize: theme.euDesign.typography.fontSize + 15,
      color: props?.colors?.[200],
    },
  }),
}));
