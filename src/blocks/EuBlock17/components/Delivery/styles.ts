import { makeStyles } from "@mui/styles";

export const useDeliveryStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  deliveryType: {},
  deliveryTypeAccordion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    background: "#FAFAFA",
    border: "1px solid #F2F2F2",
    cursor: "pointer",
    marginBottom: theme.spacing(1),
  },
  deliveryTypeAccordionContent: {
    display: "flex",
    gap: theme.spacing(1.5),

    "& .content": {
      position: "relative",
      top: -4,
    },

    "& .heading": {
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
      fontSize: theme.euDesign.typography.fontSize + 4,
      marginBottom: theme.spacing(0.5),
    },

    "& .description": {
      fontSize: theme.euDesign.typography.fontSize,
    },
  },
  deliveryTypeAccordionIcon: {
    fontSize: theme.euDesign.typography.fontSize + 12,
    transition: "all 180ms ease-in-out 0ms",
  },
  deliveryTypeAccordionIconActive: {
    transform: "rotate(180deg)",
  },
  deliveryForm: {
    border: "1px solid #F2F2F2",
    padding: theme.spacing(2),
  },
  deliveryFormHeading: {
    fontSize: theme.euDesign.typography.fontSize + 2,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    marginBottom: theme.spacing(1.5),
  },
  deliveryFormGroupHeading: {
    color: "#5C5D66",
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    margin: theme.spacing(0.5, 0, 1.5, 0),
  },
}));
