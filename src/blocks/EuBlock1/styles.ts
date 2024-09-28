import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock1Styles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    background: props?.colors?.[100],
    boxSizing: "border-box",
  }),
  container: {
    width: "85%",
    maxWidth: theme.euStyles.maxWidth,
    margin: "0 auto",
    padding: theme.spacing(4, 0.5),
    [theme.breakpoints.between("md", "xl")]: {
      padding: theme.spacing(4, 0.5),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 0),
    },
  },
  items_container: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    "&.variation-b": {
      display: "flex",
      flexDirection: "row-reverse",
      "& h1": {
        textAlign: "end",
      },
      "& p": {
        textAlign: "end",
        marginLeft: "auto",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column-reverse",
        "& h1": {
          textAlign: "center",
        },
        "& p": {
          textAlign: "center",
        },
      },
    },
    "&.variation-c": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& h1": {
        textAlign: "center",
      },
      "& p": {
        textAlign: "center",
        maxWidth: "unset !important",
      },
    },
    "&.variation-d": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& h1": {
        textAlign: "center",
      },
      "& p": {
        textAlign: "center",
      },
    },
  },
  blockSection: {
    flex: 1,
    width: "100%",
    "&.image-container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    "& .overline-5": {
      position: "absolute",
      bottom: "13%",
    },
  },
  sectionContainer: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  overlineContainer: (props) => ({
    background: props?.colors?.[200],
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(0.5),
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    maxWidth: "fit-content",
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: theme.typography.fontSize,
      padding: theme.spacing(1.5, 2),
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
    "&.variation-b": {
      marginLeft: "auto",
      [theme.breakpoints.down("md")]: {
        marginLeft: "none",
      },
    },
    "&.variation-c": {
      margin: "0 auto",
    },
    "&.variation-d": {
      margin: "0 auto",
    },
  }),
  overline: (props) => ({
    color: props?.colors?.[300],
    fontFamily: props?.fonts?.body,
    fontSize: theme.typography.fontSize + 2,
    margin: 0,
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: theme.typography.fontSize,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize - 2,
    },
  }),
  title: (props) => ({
    fontSize: theme.typography.fontSize * 4 + 8,
    fontFamily: props?.fonts?.heading,
    fontWeight: 700,
    color: props?.colors?.[400],
    margin: theme.spacing(1, 0, 0, 0),
    maxWidth: 864,
    lineHeight: "90px",

    "&.variation-c, &.variation-d": {
      maxWidth: "unset !important",
    },

    [theme.breakpoints.down("lg")]: {
      lineHeight: "60px",
    },

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: theme.typography.fontSize * 3 + 4,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 3 + 6,
      textAlign: "center",
    },
  }),
  animatedTitle: (props) => ({
    fontFamily: props?.fonts?.misc,
    fontWeight: 400,
    background: props?.colors?.[500],
    color: props?.colors?.[300],
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1),
  }),
  subTitle: (props) => ({
    color: props?.colors?.[600],
    fontSize: theme.typography.fontSize + 6,
    maxWidth: "761px",
    margin: theme.spacing(2, 0),
    fontFamily: props?.fonts?.body,

    [theme.breakpoints.between("md", "lg")]: {
      fontSize: theme.typography.fontSize + 2,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize,
      lineHeight: "21px",
      textAlign: "center",
    },
    "&.variation-d": {
      marginTop: theme.spacing(2.5),

      [theme.breakpoints.down("sm")]: {
        marginTop: `${theme.spacing(1.5)} !important`,
      },
    },
  }),
  buttonContainer: {
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    },
    "&.variation-b": {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
    "&.variation-c": {
      display: "flex",
      justifyContent: "center",
    },
    "&.variation-d": {
      display: "flex",
      justifyContent: "center",
      marginTop: 0,
    },
  },
  image: {
    display: "block",
    height: 600,
    width: "100%",
    objectFit: "cover",

    [theme.breakpoints.between("md", "lg")]: {
      width: "100%",
      ObjectFit: "cover",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 450,
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    "&.variation-b": {
      [theme.breakpoints.down("md")]: {
        marginTop: "0 !important",
        marginBottom: theme.spacing(3),
      },
    },
    "&.variation-c": {
      marginTop: theme.spacing(3),
    },
    "&.variation-d": {
      marginTop: theme.spacing(2),
    },
  },
  block1ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
