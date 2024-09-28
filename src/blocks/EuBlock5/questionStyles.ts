import { CustomThemeProps } from "./../../types";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useQuestionStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  faqBlock: {
    display: "flex",
    gap: theme.spacing(6.25),
    justifyContent: "center",
    maxWidth: 1128,
    margin: "0 auto",
    textAlign: "start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  faqContent: {
    width: "calc((100% - 50px) / 2)",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",

      "&.answer": {
        display: "none",
      },
    },
  },
  faqMenu: {
    fontSize: theme.euDesign.typography.bodySm,
    listStyle: "none",
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 2,
    },
  },
  faqMenuList: (props) => ({
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1.5),
      "&.active": {
        height: "100%",
        borderRadius: "0% 9.5% 9.5% 0%",
        position: "relative",
        border: `1px solid ${props?.colors?.[600]}`,
        borderTop: 0,
      },
    },
  }),
  faqQuestion: (props) => ({
    padding: theme.spacing(2, 2.5, 2, 2),
    borderRadius: theme.spacing(0, 6.25, 6.25, 0),
    color: props?.colors?.[700],
    fontWeight: theme.typography.fontWeightRegular,
    transition: "all .5s ease-in",
    "&.active": {
      background: props?.colors?.[600],
      color: props?.colors?.[300],
      fontWeight: theme.typography.fontWeightMedium,
    },
    margin: 0,
    "&:hover": {
      background: props?.colors?.[600],
      color: props?.colors?.[300],
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin - 1,
      padding: theme.spacing(1.5),
      paddingRight: theme.spacing(2),
      border: `1px solid ${props?.colors?.[600]}`,
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  faqQuestionHeading: (props) => ({
    fontSize: theme.typography.fontSize + 4,
    margin: 0,
    marginBottom: theme.spacing(2),
    color: props?.colors?.[800],
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin,
    },
  }),
  faqAnswer: {
    fontSize: theme.euDesign.typography.bodyMin,
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.up("md")]: {
      "&.mobile": {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.bodyMin,
      padding: theme.spacing(1.5, 2, 1.5, 1.5),
    },
  },
}));
