import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock5Styles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    background: props?.colors?.[300],
    padding: theme.spacing(4, 0),
  }),
  container: (props) => ({
    padding: theme.spacing(12.5),
    background: props?.colors?.[100],
    borderRadius: theme.spacing(1.4),
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
    "&.layout-3,&.layout-4,&.layout-5": {
      background: props?.colors?.[200],
    },
    [theme.breakpoints.down("xl")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  }),
  block: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    gap: theme.spacing(6),
    [theme.breakpoints.down("xl")]: {
      gap: theme.spacing(3),
    },
    "&.layout-4,&.layout-5": {
      flexDirection: "row",
      [theme.breakpoints.down("xl")]: {
        flexDirection: "column",
      },
    },
    "&.layout-4": {
      alignItems: "flex-start",
    },
  },
  blockHeader: (props) => ({
    fontFamily: props?.fonts?.heading,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "&.layout-4,&.layout-5": {
      alignItems: "start",
      textAlign: "start",
      [theme.breakpoints.up("xl")]: {
        maxWidth: 500,
      },
    },
    "&.layout-5": {
      [theme.breakpoints.down("xl")]: {
        alignItems: "center",
        textAlign: "center",
      },
    },
  }),
  blockContent: (props) => ({
    fontFamily: props?.fonts?.body,
    textAlign: "center",
    zIndex: 10,

    "&.layout-2": {
      background: props?.colors?.[300],
      padding: theme.spacing(2, 4),
      borderRadius: "12px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      border: `1px solid ${props?.colors?.[400]}`,
    },
    "&.layout-3,&.layout-4,&.layout-5": {
      background: props?.colors?.[100],
      padding: theme.spacing(2, 4),
      borderRadius: "12px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      border: `1px solid ${props?.colors?.[400]}`,
    },
    [theme.breakpoints.down("sm")]: {
      "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
        padding: theme.spacing(1),
        border: 0,
      },
    },
  }),
  blockOverline: (props) => ({
    fontFamily: props?.fonts?.body,
    fontSize: theme.euDesign.typography.bodySm,
    color: props.fonts[400],
    textTransform: "uppercase",
    fontWeight: 600,
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize,
    },
  }),
  blockHeading: {
    fontSize: theme.euDesign.typography.h2,
    margin: theme.spacing(2, 0, 0, 0),
    maxWidth: 657,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize * 2 + 4,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  blockCaption: (props) => ({
    maxWidth: 761,
    fontSize: theme.typography.fontSize + 6,
    margin: 0,
    color: props.colors[500],
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 2,
    },
  }),
  block5ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
