import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { getResponsiveFontSize } from "../../helpers/getResponsiveFontSize";

export const usePluginFormNotificationStyles = makeStyles((theme: any) => ({
  successTextContainer: {
    textAlign: "center",
    fontFamily: theme.euDesign.font.poppins,
  },
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 26),
    fontWeight: theme.typography.fontWeightBold,
    margin: 0,
    color: theme.euDesign.colors.black,
  },
  subTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 4),
    color: theme.euDesign.colors.black_neutral,
  },
  successImage: {
    margin: "0 auto",
    display: "block",
    width: "40%",
    height: "auto",
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
  },
  successContainer: {
    maxWidth: 582,
    padding: theme.spacing(4),
    borderRadius: 12,
    background: theme.euDesign.colors.neutral_200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacing(1),
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      maxWidth: 572,
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1220,
      padding: theme.spacing(15, 25),
    },
  },
  errorContainer: {
    background: theme.euDesign.colors.secondary_100,
    maxWidth: 362,
    padding: theme.spacing(1.4, 2),
    borderRadius: 12,
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.euDesign.colors.secondary_main}`,
    zIndex: 1,
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 6),
      maxWidth: 700,
      minWidth: 500,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1232,
      minWidth: 700,
    },
  },
  errorText: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 6),
    lineHeight: "150%",
    letterSpacing: 0.2,
    fontFamily: theme.euDesign.font.poppins,
    margin: 0,
  },
  closeButton: {
    cursor: "pointer",
    outline: "none",
    height: 32,
    width: 32,
    borderRadius: 32,
    border: `1px solid ${theme.euDesign.colors.secondary_main}`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
  },
  closeIcon: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 18),
  },
}));
