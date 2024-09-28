import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "types";

export const useEuBlock16Styles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    padding: theme.spacing(3.75, 0),
    background: props?.colors?.[400],
  }),
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  block: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "4%",
    "&.layout-2,&.layout-3,&.layout-4": {
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.down("lg")]: {
      "&.layout-3,&.layout-4,&.layout-5": {
        width: "100%",
      },
      "&.layout-3, &.layout-4, &.layout-5": {
        flexDirection: "column",
        gap: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
      "&.layout-2": {
        flexDirection: "column",
      },
    },
  },
  blockContent: {
    width: "48%",
    display: "flex",
    flexDirection: "column",

    "& img": {
      minHeight: 600,
    },

    [theme.breakpoints.down("lg")]: {
      "&.layout-3,&.layout-4,&.layout-5": {
        width: "100%",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  overline: {
    fontSize: theme.euDesign.typography.overline,
    margin: 0,
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: 600,
  },
  heading: {
    fontSize: theme.euDesign.typography.h2,
    fontWeight: 700,
    margin: 0,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.h3,
      "&.layout-4, &.layout-5": {
        maxWidth: "100%",
        marginBottom: theme.spacing(3),
      },
    },
    [theme.breakpoints.down("md")]: {
      "&.layout-4, &.layout-5": {
        maxWidth: "100%",
      },
    },
  },
  body: {
    fontSize: theme.euDesign.typography.bodyLg,
    color: (props) => props?.colors?.[300],
    margin: 0,
    fontFamily: (props) => props?.fonts?.body,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.bodySm,
    },
  },
  block16ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
