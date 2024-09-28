import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../types";
import { getResponsiveFontSize } from "../../helpers/getResponsiveFontSize";

export const useBlock21Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(8),
    },
  },
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  searchContainer: (props) => ({
    position: "relative",
    border: `1px solid ${props?.colors?.[800]}`,
    borderRadius: 4,
    paddingLeft: theme.spacing(2.5),
    display: "flex",
    justifyContent: "space-between",
  }),
  input: {
    height: 46,
    border: 0,
    outline: "none",
    fontSize: theme.typography.fontSize + 2,
    color: (props) => props?.colors?.[900],
    fontFamily: (props) => props?.fonts?.body,
    flex: 1,
    [theme.breakpoints.up("md")]: {
      height: 56,
      width: 56,
    },
  },
  searchButton: (props) => ({
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props?.colors?.[600],
    border: 0,
    "& > svg": {
      fill: props?.colors?.[700],
      fontSize: theme.typography.fontSize + 6,
    },
    [theme.breakpoints.up("md")]: {
      height: 56,
      width: 56,
    },
    cursor: "pointer",
  }),
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  tagsContainer: {
    padding: theme.spacing(2),
    borderRadius: 100,
    display: "flex",
    gap: theme.spacing(3),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("md")]: {
      boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.10)",
      width: "100%",
      margin: theme.spacing(3, 0),
      gap: theme.spacing(5),
    },
  },
  tag: (props) => ({
    padding: theme.spacing(1, 3),
    background: props?.colors?.[700],
    fontFamily: props?.fonts?.body,
    cursor: "pointer",
    border: `1px solid ${props?.colors?.[300]}`,
    borderRadius: 50,
    color: props?.colors?.[500],
    fontSize: theme.typography.fontSize + 2,
    margin: 0,
    "&.active": {
      background: props?.colors?.[100],
      color: props?.colors?.[700],
      fontWeight: "bold",
    },
    textTransform: "capitalize",
  }),
  searchResultText: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 20),
    fontWeight: theme.typography.fontWeightBold,
    color: props?.colors?.[500],
    fontFamily: props?.fonts?.heading,
    margin: 0,
  }),
  loadMoreBtnParent: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  loadMoreBtn: (props) => ({
    padding: theme.spacing(2, 3),
    borderRadius: 1000,
    background: props?.colors?.[100],
    color: props?.colors?.[700],
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: props?.fonts?.body,
    cursor: "pointer",
    border: "none",
  }),
  cardContainer: {
    display: "grid",
    gap: theme.spacing(3),
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2.5, 0),
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(3, 0),
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  title: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 16),
    fontFamily: props?.fonts?.heading,
    color: props?.colors?.[500],
    margin: 0,
  }),
  blockHeader: {
    [theme.breakpoints.up("md")]: {
      width: "85%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
      margin: "0 auto",
    },
  },
}));
