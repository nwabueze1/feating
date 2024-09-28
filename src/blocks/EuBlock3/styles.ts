import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useEuBlock3Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: (props) => ({
    background: props?.colors?.[100],
    padding: theme.spacing(5, 0),

    "& input": {
      "&::placeholder": {
        fontFamily: props?.fonts?.body,
      }
    }
  }),
  container: {
    width: "85%",
    maxWidth: theme.euStyles.maxWidth,
    margin: "0 auto",
  },
  footerContainer: (props) => ({
    display: "flex",
    justifyContent: "space-between",
    fontFamily: props?.fonts?.body,
    flexWrap: "wrap",
    "&.layout-3": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("lg")]: {
      "&.layout-5": {
        justifyContent: "start",
      },
    },
  }),
  footerList: (props) => ({
    listStyle: "none",
    textDecoration: "none",
    color: props?.colors?.[200],
    fontSize: theme.typography.fontSize,
    padding: 0,
    margin: 0,
    order: 3,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&.layout-3": {
      "&:not(:first-child)": {
        display: "none",
      },
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "&.title,&.get-in-touch": {
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        order: 1,
      },
    },
    "&.layout-4,&.layout-5": {
      "&:nth-child(3)": {
        "&.layout-5": {
          display: "none",
        },
      },
    },
    [theme.breakpoints.down("lg")]: {
      "&.layout-5": {
        marginRight: theme.spacing(20),
        [theme.breakpoints.down("sm")]: {
          margin: 0,
        },
      },
    },
  }),
  footerListItem: {
    margin: theme.spacing(2, 0),
    maxWidth: 297,
    "&.layout-3": {
      margin: theme.spacing(1, "auto"),
      "&.caption": {
        maxWidth: "100%",
      },
    },
  },
  footerListItemLink: (props) => ({
    color: props?.colors?.[200],
    textDecoration: "none",
    fontSize: theme.typography.fontSize,
  }),
  footerLogoList: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      "& li": {
        maxWidth: "100%",
      },
      order: 1,
    },
  },
  getInTouch: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      order: 1,
    },
    "&.layout-4": {
      margin: theme.spacing(2, 0),
    },
  },
  footerLogo: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    flexWrap: "nowrap",
  },
  footerLogoImage: {
    height: 49,
    width: 49,
  },
  footerLogoText: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    fontSize: theme.euDesign.typography.h4,
  }),
  footerListHeader: {
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    fontSize: theme.euDesign.typography.overline,
  },
  socialMediaContainer: {
    display: "flex",
    gap: theme.spacing(3.5),
    alignItems: "center",
  },
  socialMediaIcon: {
    fontSize: theme.euDesign.typography.bodyLg,
  },
  divider: (props) => ({
    width: "100%",
    backgroundColor: props?.colors?.[300],
    height: 1,
  }),
  copyright: (props) => ({
    color: props?.colors?.[200],
    fontSize: theme.euDesign.typography.caption,
    fontFamily: props?.fonts?.body,
    marginTop: theme.spacing(2.5),
    "&.layout-3": {
      textAlign: "center",
    },
  }),
  inputContainer: () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.euDesign.colors.white,
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${theme.euDesign.colors.green_base}`,
    [theme.breakpoints.down("lg")]: {
      width: "85vw",
      "&.layout-5": {
        width: "65vw",
      },
    },
  }),
  inputWrapper: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  input: (props) => ({
    fontSize: theme.euDesign.typography.bodySm,
    "&::placeholder": {
      color: props?.colors?.[400],
      fontSize: theme.euDesign.typography.bodySm,
    },
    padding: theme.spacing(2),
    fontFamily: props?.fonts?.body,
    border: "none",
    outline: "none",
    width: "100%",
  }),
  subscribeList: {
    margin: theme.spacing(2, 0),
  },
  block3ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
},
}));
