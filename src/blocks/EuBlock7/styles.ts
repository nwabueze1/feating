import { CustomThemeProps } from "../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock7Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  rootParent: (props) => ({
    background: props?.colors?.[100],
    fontFamily: props?.fonts?.body,
  }),
  root: {
    maxWidth: theme.euStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
  blockContainer: {
    padding: theme.spacing(6.25, 0),
  },
  blockHeader: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    textAlign: "center",
    fontFamily: props?.fonts?.heading,
    "&.layout-2": {
      alignItems: "start",
      textAlign: "start",
    },
  }),
  blockOverline: (props) => ({
    textTransform: "uppercase",
    color: props?.colors?.[200],
    fontSize: theme.euDesign.typography.overline,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.overline - 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.overline - 4,
    },
  }),
  blockHeading: (props) => ({
    margin: 0,
    fontSize: theme.euDesign.typography.h2,
    color: props?.colors?.[300],
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.h2 - 4,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h2 - 6,
    },
  }),
  blockCaption: (props) => ({
    maxWidth: "45%",
    "&.layout-2": {
      maxWidth: "50%",
    },
    fontSize: theme.euDesign.typography.bodyLg,
    color: props?.colors?.[400],
    margin: 0,
    [theme.breakpoints.down("xl")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.bodyLg - 2,
      maxWidth: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.euDesign.typography.bodyLg - 4,
      maxWidth: "100%",
    },
  }),
  productBlock: {
    display: "flex",
    marginTop: theme.spacing(6),
    gap: theme.spacing(2),
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(2),
      justifyContent: "center",
    },
  },
  button: {
    width: "35%",
    margin: "0 auto",
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContent: {
    width: "23%",
    maxWidth: "23%",
    [theme.breakpoints.only("xl")]: {
      width: "32%",
      maxWidth: "32%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "32%",
      maxWidth: "32%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "47%",
      maxWidth: "47%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  listButtonContainer: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    border: "none",
    background: "none",
    width: "fit-content",
    marginRight: "0 !important",
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
    background: props.colors?.[700],
    color: theme.euDesign.colors.white,
    borderRadius: theme.spacing(80),
    width: "40%",
    margin: "16px auto 0 auto",
    textDecoration: "none",
  }),
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(5),
  },
  "@keyframes moveAndScaleIn": {
    "0%": {
      transform: "translateX(-100px) scale(0.5)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0) scale(1)",
      opacity: 1,
    },
  },
  "@keyframes maskAndReveal": {
    "0%": {
      clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
      opacity: 0,
    },
    "50%": {
      clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
      opacity: 1,
    },
    "100%": {
      clipPath: "polygon(50% 0, 50% 100%, 50% 100%, 50% 0)",
      opacity: 1,
    },
  },
  block7ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
  },
}));
