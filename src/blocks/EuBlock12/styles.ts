import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "types";

export const useEuBlock12Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    padding: theme.spacing(4, 0),
    background: props?.colors?.[100],
  }),
  container: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  block: {
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "space-between",
    alignItems: "center",
    "&.layout-3": {
      flexDirection: "row-reverse",
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column-reverse",
      },
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
      "&.layout-2,&.layout-4": {
        flexDirection: "column-reverse",
      },
    },
    "&.layout-4, &.layout-5": {
      textAlign: "center",
    },
    "&.layout-4": {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column-reverse",
      },
    },
  },
  blockContent: {
    width: "48%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  blockText: {
    [theme.breakpoints.down("lg")]: {
      width: "85%",
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
    },
  },
  heading: {
    fontFamily: (props) => props?.fonts?.heading,
    fontSize: theme.euDesign.typography.h2,
    fontWeight: 700,
    color: (props) => props?.colors?.[200],
    margin: 0,
  },
  headingColored: {
    color: (props) => props?.colors?.[300],
  },
  subtext: {
    fontSize: theme.euDesign.typography.bodySm,
    color: (props) => props?.colors?.[400],
    margin: theme.spacing(2, 0),
    fontFamily: (props) => props?.fonts?.body,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    fontFamily: (props) => `${props?.fonts?.body} !important`,
    textAlign: "left",
  },
  mapContainer: {
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center !important",
    backgroundColor: theme.euDesign.colors.white,
    marginLeft: "auto",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: "100% !important",
      display: "flex",
      padding: theme.spacing(8.75, 5),
    },
    [theme.breakpoints.down("lg")]: {
      width: "100% !important",
    },
    "&.layout-4,&.layout-5": {
      padding: 0,
      width: "100% !important",
      background: "none !important",
      [theme.breakpoints.down("sm")]: {
        minHeight: 400,
      },
    },
  },
  mapBox: {
    minHeight: 500,
    position: "initial",
    width: "100%",
    top: "10%",
    left: "-20%",
    [theme.breakpoints.down("lg")]: {
      position: "static",
    },
    "&.layout-4,&.layout-5": {
      position: "static",
      minHeight: 600,
      [theme.breakpoints.down("sm")]: {
        minHeight: 400,
      },
    },
  },
  map: {
    border: (props) => `6px solid ${props?.colors?.[200]}`,
    height: "100%",
    width: "100%",
    minHeight: 500,
    "&.layout-4, &.layout-5": {
      minHeight: 600,
      [theme.breakpoints.down("sm")]: {
        minHeight: 400,
      },
    },
  },
  contactInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: theme.spacing(6.25),
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(3),
    },
  },
  button: {
    marginRight: 0,
  },
  block12ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
