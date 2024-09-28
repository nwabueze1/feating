import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBlog2BlockStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    background: props?.colors?.[100],
    padding: theme.spacing(6, 0),
    overflowWrap: "anywhere",

    "& button": {
      margin: "0 !important",
    },
  }),
  container: {
    width: "85%",
    margin: "0 auto",
    maxWidth: theme.euStyles.maxWidth,
  },
  blogContainer: {
    display: "flex",
    gap: "3%",
    justifyContent: "space-between",
    alignItems: "center",
    "&.layout-2": {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
    "&.layout-3": {
      flexDirection: "row-reverse",
    },
    "&.layout-4": {
      flexDirection: "initial",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      "&.layout-2": {
        flexDirection: "column",
      },
      "&.layout-3": {
        flexDirection: "column",
      },
      "&.layout-4": {
        flexDirection: "column",
      },
    },
  },
  blockContent: {
    flex: 1,
  },
  blogOverline: (props) => ({
    fontSize: theme.typography.fontSize + 2,
    fontWeight: 600,
    color: props?.colors?.[200],
    margin: 0,
    textTransform: "uppercase",
  }),
  blogTitle: (props) => ({
    fontSize: theme.typography.fontSize * 3 - 2,
    fontFamily: props?.fonts?.heading,
    fontWeight: 700,
    color: props?.colors?.[300],
    margin: 0,
    lineHeight: "62px",
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.euDesign.typography.h1,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
      marginBottom: "16px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 3 - 2,
      maxWidth: "100%",
      lineHeight: "50px !important",
    },
  }),
  layout5Text: {
    "&.layout-5": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      "& h4": {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
      },
    },
  },
  blogBody: (props) => ({
    fontSize: theme.typography.fontSize + 4,
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[400],
    lineHeight: theme.spacing(4.5),
    fontWeight: 400,
    maxWidth: 761,
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up(1728)]: {
      fontSize: theme.typography.fontSize * 2 - 4,
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: "24px",
      fontSize: theme.typography.fontSize + 2,
      textSAlign: "justify",
    },
  }),
  blogImageContainer: (props) => ({
    width: "100%",

    "&.layout-3,&.layout-4,&.layout-5": {
      background: props?.colors?.[500],
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2, 3),
      [theme.breakpoints.down("lg")]: {
        padding: 0,
        background: "none",
        "&.layout-3,&.layout-4,&.layout-5": {
          padding: theme.spacing(1, 1.5),
          background: props?.colors?.[500],
        },
      },
    },
  }),
  blogImage: {
    height: 500,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      borderRadius: 12,
      fontSize: theme.typography.fontSize * 2.6,
      height: "100%",
      minHeight: "unset !important",
    },
  },
  buttonContainer: {
    display: "flex",
    whiteSpace: "nowrap",
    marginTop: theme.spacing(3),
    gap: theme.spacing(1),

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  block2ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
