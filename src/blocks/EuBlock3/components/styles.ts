import { makeStyles } from "@mui/styles";

export const useBlock3ComponentStyes = makeStyles((theme: any) => ({
  footerList: {
    listStyle: "none",
    textDecoration: "none",
    color: theme.euDesign.colors.white,
    fontSize: theme.typography.fontSize,
    padding: 0,
    margin: 0,
    order: 3,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&.layout-4": {
        order: 1,
      },
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
    "&.layout-4,&.layout-5": {
      "&.get-in-touch": {
        [theme.breakpoints.down("lg")]: {
          order: 1,
          width: "200%",
        },
      },
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
  },
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
  footerListItemLink: {
    color: theme.euDesign.colors.white,
    textDecoration: "none",
    fontSize: theme.typography.fontSize,
  },
  footerLogoList: {
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      "& li": {
        maxWidth: "100%",
      },
      order: 1,
    },
  },
  socialMediaContainer: {
    display: "flex",
    gap: theme.spacing(3.5),
    alignItems: "center",
  },
  socialMediaIcon: {
    fontSize: theme.euDesign.typography.bodyLg,
  },
  footerListHeader: {
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    fontSize: theme.euDesign.typography.overline,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.euDesign.colors.white,
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${theme.euDesign.colors.green_base}`,
    padding: theme.spacing(0.6),
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: "85vw",
      "&.layout-5": {
        width: "65vw",
      },
    },
  },
  inputWrapper: {
    alignItems: "start",
    display: "flex",
    width: "100%",
    position: "relative",
    marginTop: theme.spacing(0.5),
  },
  subscribeList: {
    margin: theme.spacing(2, 0),
  },
  subscribeInput: {
    border: "none",
  },
  subscribeErrorMessage: {
    bottom: -30,
    zIndex: 10,
  },
  subscribeButton: {
    marginRight: 0,
    position: "sticky",
    top: 0,
  },
  pluginFormContainer: {
    "& > p:first-of-type": {
      display: "none",
    },
  },
}));
