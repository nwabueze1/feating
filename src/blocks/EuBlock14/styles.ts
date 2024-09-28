import { CustomThemeProps } from "../../types";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useEuBlock14Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    background: props?.colors?.[400],

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    }
  }),
  container: {
    width: "85%",
    margin: "0 auto",
    maxWidth: theme.euStyles.maxWidth,
  },
  block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2%",
    "&.layout-2": {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        gap: "2%",
      },
    },
    "&.layout-3": {
      padding: theme.spacing(4, 0),

      [theme.breakpoints.up("md")]: {
        padding: 0,
      }
    },
    "&.layout-3, &.layout-4": {
      flexDirection: "column-reverse",
      gap: theme.spacing(4),
    },
    "&.layout-5": {
      flexDirection: "row",
      gap: theme.spacing(2.5),
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(4),
    },
  },
  blockContent: {
    width: "49%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&.image": { width: "49%" },

    "&.layout-3": {
      width: "100%",
      "&.image": {
        backgroundPosition: "center !important",
        backgroundRepeat: "no-repeat !important",
        minHeight: 600,
        backgroundSize: "cover !important",
      }
    },

    "&.layout-4, &.layout-5": {
      width: "100%",
      "&.image": {
        backgroundPosition: "center !important",
        backgroundRepeat: "no-repeat !important",
        minHeight: 600,
        backgroundSize: "cover !important",
      },
      [theme.breakpoints.up("md")]: {
        minHeight: 600,
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      "&.image": {
        width: "100%",
      },
    },
  },
  blockImage: {
    backgroundPosition: "center !important",
    backgroundRepeat: "no-repeat !important",
    minHeight: 450,
    backgroundSize: "cover !important",
  },
  blockOverline: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    color: (props) => props?.colors?.[100],
    margin: 0,
    textTransform: "uppercase",
    fontFamily: (props) => props?.fonts?.body,
    [theme.breakpoints.down("xl")]: {
      fontSize: theme.typography.fontSize,
    },
    "&.layout-4,&.layout-5": {
      textAlign: "center",
    },
  },
  blockTitle: {
    fontSize: theme.euDesign.typography.h2,
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
    margin: 0,
    maxWidth: "100%",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.only("xl")]: {
      maxWidth: "100%",
    },
    "&.layout-3,&.layout-4,&.layout-5": {
      [theme.breakpoints.up("xl")]: {
        maxWidth: "37%",
      },
      [theme.breakpoints.only("xl")]: {
        maxWidth: "46%",
      },
      [theme.breakpoints.down("lg")]: {
        maxWidth: "80%",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
    "&.layout-4,&.layout-5": {
      textAlign: "center",
      margin: "0 auto",
      "&.layout-5": {
        marginBottom: theme.spacing(3.75),
      },
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: theme.euDesign.typography.h3,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.euDesign.typography.h4,
      maxWidth: "100%",
    },
  },
  blockBody: {
    fontSize: theme.typography.fontSize + 4,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[300],
    lineHeight: theme.spacing(3.5),
    fontWeight: theme.euDesign.typography.fontWeightRegular,
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.down("xl")]: {
      lineHeight: "24px",
      fontSize: theme.euDesign.typography.bodySm,
      textAlign: "start",
    },
    "&.layout-5": {
      [theme.breakpoints.up("lg")]: {
        margin: 0,
      },
    },
  },
  block14ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
