import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../types";

export const usePaymentStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    border: "1px solid #FD6F87",
    padding: theme.spacing(4),
    borderRadius: "4px",
    fontFamily: props?.fonts?.body,
  }),
  paymentHeading: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    fontSize: theme.euDesign.typography.fontSize * 1.5,
    marginBottom: theme.spacing(0.5),
    color: "#272727",
  }),
  paymentDescription: {
    fontSize: theme.euDesign.typography.fontSize,
    marginBottom: theme.spacing(3),
  },
  paymentAmount: {
    color: "#E32D4C",
    fontSize: theme.euDesign.typography.fontSize + 4,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    marginBottom: theme.spacing(3),
  },
  paymentComponentHeading: {
    display: "none",
  },
  paymentComponentSubheading: {
    display: "none",
  },
  paymentComponentOption: (props) => ({
    borderBottom: "1px solid #F2F2F2",
    padding: `${theme.spacing(2.5)} !important`,
    marginBottom: "0px !important",

    "& .custom__radio": {
      position: "relative",
      left: -4,
      width: "9px !important",
      height: "9px !important",
      opacity: "1 !important",
    },

    "& input:checked ~ .custom__radio": {
      backgroundColor: props?.colors?.[300],
      outline: `2px solid ${props?.colors?.[300]}`,
    },
  }),
  paymentComponentButton: (props) => ({
    borderRadius: "100px !important",
    marginTop: `${theme.spacing(4)} !important`,
    background: `${props?.colors?.[300]} !important`,
    color: `${props?.colors?.[500]} !important`,
    fontFamily: props?.fonts?.body,
    padding: `${theme.spacing(2.5, 3)} !important`,
  }),
}));
