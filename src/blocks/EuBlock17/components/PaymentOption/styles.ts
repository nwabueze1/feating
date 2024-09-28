import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePaymentOptionStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.design.colors.waz_white,
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(2.5),
      borderBottom: "1px solid #F2F2F2",
    },
    paymentOptionItem: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2.5),
    },
    paymentImage: {
      width: "100px",
      height: "40px",
      objectFit: "cover",
    },
    paymentOptionDetail: {
      fontFamily: "inherit",
    },
    paymentOptionTitle: {
      fontSize: theme.typography.fontSize + 2,
      color: "#00000",
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    },
    optionDetails: {
      display: "flex",
      alignItems: "center",
    },
    paymentConfig: {
      position: "relative",
      top: -8,
      padding: theme.spacing(0, 2),
      fontFamily: "inherit",
      fontSize: theme.typography.fontSize + 2,
    },
    paymentConfigOption: {
      marginBottom: theme.spacing(1),
    },
  })
);
