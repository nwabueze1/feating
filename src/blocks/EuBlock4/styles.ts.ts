import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlock4Styles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    background: props?.colors?.[100],
    padding: theme.spacing(4, 0),
    position: "relative",
  }),
  container: {
    width: "85%",
    maxWidth: theme.euStyles.maxWidth,
    margin: "0 auto",
  },
  block: {
    display: "flex",
    gap: theme.spacing(3.75),
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    "&.layout-2,&.layout-3,&.layout-4": {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
    "&.layout-4": {
      [theme.breakpoints.down("xl")]: {
        flexDirection: "row-reverse",
      },
    },
  },
  backgroundContainer: {
    position: "relative",
    minHeight: "250px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    "&.layout-3,&.layout-4,&.layout-5": {
      minHeight: 0,
    },
  },
  redBackground: (props) => ({
    height: "2%",
    width: "1%",
    background: props?.colors?.[200],
    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
    borderRadius: "5.6px",
    position: "absolute",
    top: "4%",
    right: "8%",
    "&.layout-3,&.layout-4": {
      top: "13%",
      right: "25%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "&.layout-5": {
      top: "4%",
      right: "8%",
    },
  }),
  goldBackground: (props) => ({
    height: "2%",
    width: "1%",
    background: props?.colors?.[400],
    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
    borderRadius: "5.6px",
    position: "absolute",
    top: "5%",
    right: "42%",
    "&.layout-3,&.layout-4": {
      top: "13%",
      left: "25%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "&.layout-5": {
      top: "9%",
      left: "45%",
    },
  }),
  backgroundImage: {
    transform: "rotate(-19.38deg)",
    height: 147,
    width: 147,
    right: "2%",
    bottom: "30%",
    position: "absolute",
  },
  backgroundImageLeft: {
    transform: "rotate(-59.95deg)",
    right: "0",
    left: "2%",
    height: 105,
    width: 105,
  },
  sectionHead: {
    display: "flex",
    gap: "30px",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    "&.layout-3": {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
    "&.layout-3,&.layout-4": {
      gap: "70px",
      flexDirection: "column",
      maxWidth: "50%",
      margin: "0 auto",
      [theme.breakpoints.down("xl")]: {
        gap: "90px",
        maxWidth: "100%",
      },
      [theme.breakpoints.down("md")]: {
        gap: "40px",
        maxWidth: "100%",
      },
    },
  },
  sectionContent: {
    flex: 1,
    "&.layout-3,&.layout-4": {
      "& img": {
        display: "none",
      },
    },
  },

  blockContent: {
    flex: 1,
    "&.img": {
      [theme.breakpoints.down("lg")]: {
        order: 0,
      },
    },
    order: 1,
    position: "relative",
  },
  blockOverline: (props) => {
    return {
      fontFamily: props?.fonts?.body,
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
      color: props?.colors?.[400],
      fontSize: theme.euDesign.typography.bodySm,
      textTransform: "uppercase",
      marginBottom: theme.spacing(2),
      margin: 0,
      "&.layout-3,&.layout-4": {
        textAlign: "center",
      },
    };
  },
  blockHeading: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    color: props?.colors?.[500],
    fontSize: theme.euDesign.typography.h4,
    margin: 0,
    "&.layout-3,&.layout-4": {
      textAlign: "center",
    },
  }),
  blockCaption: (props) => ({
    fontSize: theme.euDesign.typography.bodySm,
    color: props?.colors?.[600],
    fontFamily: props?.fonts?.body,
    marginTop: theme.spacing(0.5),
    margin: 0,
    "&.layout-3,&.layout-4": {
      textAlign: "center",
    },
  }),
  block4ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
