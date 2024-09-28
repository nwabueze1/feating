import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "types";

export const useEuBlock18Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
    background: (props) => props?.colors?.[100],
    padding: theme.spacing(6, 3),
    position: "relative",
  },
  blockHeader: {
    fontWeight: 700,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.heading,
    margin: theme.spacing(1.4, 0),
    lineHeight: theme.spacing(3.75),
    textTransform: "capitalize",
    "&.layout-4": {
      textAlign: "center",
    },
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.filled": {
      color: (props) => props?.colors?.[900],
    },
  },
  cardContainer: {
    maxWidth: 450,
    minWidth: 320,
    [theme.breakpoints.down("sm")]: {
      minWidth: 250,
    },
    "&.layout-2,&.layout-3": {
      minWidth: "100%",
    },
  },
  block: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: theme.spacing(5),
    [theme.breakpoints.only("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.down("xl")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(3),
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  scrollButton: (props) => ({
    width: 36,
    height: 36,
    background: props?.colors?.[300],
    color: props?.colors?.[900],
    fontSize: theme.typography.fontSize - 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all ease-in .5s",
    position: "absolute",
    top: "50%",
    right: "-1%",
    bottom: "50%",
    "&:hover": {
      color: props?.colors?.[500],
      cursor: "pointer",
    },
    "& svg": {
      fontSize: theme.typography.fontSize,
      fontWeight: 600,
    },
    "&.left": {
      right: "unset",
      left: "-1%",
    },
    "&:disabled": {
      color: props?.colors?.[200],
      background: props?.colors?.[800],
      cursor: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
  block15ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
