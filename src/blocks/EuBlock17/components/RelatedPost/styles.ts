import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "types";

export const useRelatedPostStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    fontFamily: (props) => props?.fonts?.body,
    "& a": {
      textDecoration: "none",
    },
  },
  thumbnailContainer: {
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
  },
  cardContent: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("lg")]: {
      minWidth: 360,
      minHeight: 418,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 300,
    },
    "&.layout-3": {
      padding: theme.spacing(2),
      background: theme.euDesign.colors.white,
      borderRadius: "12px",
      [theme.breakpoints.down("lg")]: {
        minWidth: 400,
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: 300,
      },
    },
  },
  latestArticleHeading: {
    fontSize: theme.typography.fontSize + 10,
    marginBottom: theme.spacing(3),
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
  },
  datePosted: {
    opacity: 0.5,
    color: theme.euDesign.colors.neutral_500,
    marginTop: theme.spacing(0.5),
    fontSize: theme.typography.fontSize - 2,
  },
  categoryContainer: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    fontFamily: (props) => props?.fonts?.heading,
  },
  category: {
    margin: 0,
    fontSize: theme.typography.fontSize - 2,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "uppercase",
    color: (props) => props?.colors?.[950],
  },
  dash: {
    height: 0.5,
    background: (props) => props?.colors?.[950],
    width: 15,
  },
  readTime: {
    margin: 0,
    fontSize: theme.typography.fontSize - 2,
    color: (props) => props?.colors?.[200],
  },
  backgroundImage: {
    height: 240,
    marginBottom: theme.spacing(2),
    "&.layout-3": {
      borderRadius: "12px",
    },
  },
  title: {
    color: (props) => props?.colors?.[500],
    fontSize: theme.typography.fontSize + 6,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  separator: {
    width: "100%",
    height: 0.5,
    margin: theme.spacing(0.5, 0),
    background: (props) => props?.colors?.[700],
    opacity: 0.5,
  },
  scrollButton: (props) => ({
    width: 64,
    height: 64,
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
    top: "30%",
    right: "-2%",
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
      left: "-2%",
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
}));
