import { CustomThemeProps } from "types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock11Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflowX: "hidden",
    position: "relative",

    "&.layout-1,&.layout-2": {
      paddingBottom: theme.spacing(3),
    }
  },
  container: (props) => ({
    maxWidth: theme.euStyles.maxWidth,
    margin: "0 auto",
    width: "85%",
    fontFamily: props?.fonts?.body,
  }),
  overlay: {
    width: "100%",
    height: "100%",
    background: theme.euDesign.getShadow(0.7),
    top: 0,
    left: 0,
    position: "absolute",
    "&.layout-2": {
      background: `linear-gradient(180deg, ${theme.euDesign.colors.black} 33.78%, ${theme.euDesign.getShadow(0)} 100%)`,
    },
  },
  block: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: props?.colors?.[200],
    textAlign: "center",
    "&.layout-2": {
      justifyContent: "start",
      marginTop: theme.spacing(6.25),
    },
    "&.layout-3, &.layout-4": {
      [theme.breakpoints.down("sm")]: {
        height: "unset",
      },
    },
  }),
  blockContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  blockOverline: {
    margin: 0,
    fontSize: theme.euDesign.typography.overline,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 600,
    zIndex: 2,
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.overline - 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.overlineSmall,
    },
  },
  blockHeading: {
    margin: theme.spacing(1, 0),
    fontSize: theme.euDesign.typography.h2,
    zIndex: 2,
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.h3,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5,
    },
  },
  blockSubtitle: (props) => ({
    color: props?.colors?.[300],
    fontSize: theme.euDesign.typography.bodyLg,
    zIndex: 2,
    margin: "0 auto",
    maxWidth: "50%",
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.bodySm,
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin,
    },
  }),
  ratingContainer: {
    display: "flex",
    gap: theme.spacing(0.5),
    zIndex: 1,
    margin: theme.spacing(1, 0),
  },
  price: {
    fontSize: theme.euDesign.typography.price,
    zIndex: 1,
    margin: theme.spacing(1, 0),
  },
  currency: {
    color: (props) => props?.colors?.[400],
  },
  buttonContainer: {
    zIndex: 1,

    "&.layout-3": {
      marginBottom: theme.spacing(3),
    }
  },
  imageBackground: {
    height: "55vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: theme.spacing(2),
  },
  block11ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
