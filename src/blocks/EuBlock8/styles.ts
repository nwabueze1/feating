import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlock9Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    padding: theme.spacing(6, 0),
    background: props?.colors?.[100],
    position: "relative",
  }),
  blockContent: (props) => ({
    flex: 1,
    fontFamily: props?.fonts?.body,
    width: "46%",
    position: "relative",
    "&.layout-3": {
      width: "50%",
      [theme.breakpoints.down(1030)]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down(1030)]: {
      width: "100%",
      "&.image-container": {
        display: "flex",
        justifyContent: "center",
      },
    },
    "&.layout-2": {
      flexDirection: "row-reverse",
    },
    "&.layout-4, &.layout-5": {
      width: "100%",
    },
  }),
  blockOverline: (props) => ({
    fontSize: theme.euDesign.typography.overline,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    fontFamily: props?.fonts?.body,
    textTransform: "capitalize",
    margin: 0,
    color: props?.colors?.[200],
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.overline,
      "&.layout-3,&.layout-4,&.layout-5": {
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.overline - 4,
    },
  }),
  blockHeading: (props) => ({
    fontSize: theme.euDesign.typography.h2,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    fontFamily: props?.fonts?.heading,
    margin: theme.spacing(1.3, 0),
    color: props?.colors?.[300],
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.h2 - 2,
      margin: theme.spacing(1, 0),
    },
    "&.layout-3,&.layout-4,&.layout-5": {
      maxWidth: "45%",
      [theme.breakpoints.only("lg")]: {
        minWidth: "75%",
      },
      [theme.breakpoints.down(1030)]: {
        maxWidth: "100%",
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h3,
      maxWidth: "100%",
      marginBottom: theme.spacing(3),
      "&.layout-4,&.layout-5": {
        textAlign: "start",
      },
    },
  }),
  testament: (props) => ({
    width: "48%",
    minWidth: "48%",
    minHeight: "100%",
    "&.layout-5": {
      border: `1px solid ${props?.colors?.[1100]}`,
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1.5),
      minWidth: "48%",
      width: "48%",
    },
    [theme.breakpoints.down("xl")]: {
      minWidth: "45%",
    },
    [theme.breakpoints.down(1030)]: {
      minWidth: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "100% !important",
    },
  }),
  testimonySub: ({ colors }) => ({
    fontSize: theme.euDesign.typography.bodyMin,
    color: colors?.[400],
    margin: theme.spacing(0.5, 0),
  }),
  testimony: ({ colors }) => ({
    fontSize: theme.euDesign.typography.bodySm,
    color: colors?.[500],
    margin: 0,
    marginTop: theme.spacing(3),
  }),
  scrollButton: ({ colors }) => ({
    width: "48px",
    height: "48px",
    background: colors?.[600],
    color: colors?.[700],
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&.outlined": {
      color: colors?.[900],
      background: colors?.[1000],
    },
    "& svg": {
      fontSize: "18px",
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    },
    "&.layout-5": {
      position: "absolute",
      right: "4.4%",
      bottom: "27%",
      "&.left": {
        left: "4.2%",
      },
      [theme.breakpoints.down("xl")]: {
        right: "unset",
        bottom: "unset",
        position: "relative",
        "&.left": {
          left: "unset",
        },
      },
    },
  }),
  block8ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
