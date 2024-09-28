import { CustomThemeProps } from "../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock6Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    padding: theme.spacing(4, 0),
    background: props?.colors?.[500],
  }),
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  block: (props) => ({
    fontFamily: props?.fonts?.body,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
  }),
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      "& button": {
        display: "none",
      },
    },
    "&.layout-3": { flexDirection: "column", alignItems: "center" },
  },
  heading: {
    "&.layout-3": { flex: 1, width: "100%" },
  },
  headerOverline: (props) => ({
    fontSize: theme.typography.fontSize + 2,
    color: props?.colors?.[100],
    margin: 0,
    fontWeight: 600,
    "&.layout-3": { textAlign: "center" },
  }),
  headerTitle: (props) => ({
    maxWidth: "60%",
    color: props?.colors?.[200],
    fontWeight: 700,
    fontSize: theme.typography.fontSize * 3 + 6,
    margin: theme.spacing(1, 0),
    [theme.breakpoints.only("xl")]: {
      margin: 0,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 2 + 4,
      maxWidth: "100%",
    },
    "&.layout-3": { textAlign: "center", maxWidth: 1440 },
  }),
  caption: (props) => ({
    margin: 0,
    [theme.breakpoints.up("lg")]: {
      maxWidth: "60%",
    },
    fontSize: theme.euDesign.typography.bodyLg,
    color: props?.colors?.[300],
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodySm,
    },
    "&.layout-3": {
      textAlign: "center",
      margin: "0 auto",
    },
  }),
  scrollButton: (props) => ({
    width: "48px",
    height: "48px",
    background: props?.colors?.[700],
    color: props?.colors?.[500],
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all ease-in .5s",
    "&:hover": {
      color: props?.colors?.[500],
      background: props?.colors?.[400],
      cursor: "pointer",
    },
    "& svg": {
      fontSize: "18px",
      fontWeight: 600,
    },
  }),
  listButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  layout3Heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  listButton: (props) => ({
    padding: theme.spacing(2.2, 3.2),
    outline: "none",
    cursor: "pointer",
    fontFamily: props.fonts?.body,
    fontSize: theme.typography.fontSize + 4,
    border: "none",
    background: props?.colors?.[700],
    color: theme.euDesign.colors.white,
    borderRadius: theme.spacing(80),
    width: "40%",
    margin: "16px auto 0 auto",
  }),
  block6ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
