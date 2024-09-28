import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useOptionConfigStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  modalContainer: {
    width: "100%",
    height: "100%",
  },
  optionStyles: {
    padding: theme.spacing(2),
    height: "60vh",
    overflowY: "scroll",

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 4),
    },
  },
  successModal: (props) => ({
    color: props?.colors?.[600],
    fontSize: theme.euDesign.typography.h5,
    display: "flex",
    gap: theme.spacing(1),
    padding: theme.spacing(2, 4),
    alignItems: "center",
    justifyContent: "space-between",
    "& .options": {
      fontSize: theme.typography.fontSize + 6,
      fontWeight: theme.euDesign.typography.fontWeightSemiBold,
      color: props?.colors?.[100],
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 2,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 2,
      padding: theme.spacing(2),
    },
  }),
  successModalText: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  close: (props) => ({
    background: props?.colors?.[700],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: theme.spacing(0.5),
    cursor: "pointer",
  }),
  quantity: (props) => ({
    fontSize: theme.typography.fontSize + 1,
    color: props?.colors?.[100],
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize - 1,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
    fontWeight: theme.euDesign.typography.fontWeightBold,
  }),
  quantitySign: {
    cursor: "pointer",
  },
  divisionLine: (props) => ({
    width: "100%",
    height: "2px",
    background: props?.colors?.[400],
  }),
  option: {
    marginBottom: theme.spacing(2),
  },
  optionHeader: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    marginBottom: theme.spacing(2),
  },
  optionsDescription: {
    marginTop: theme.spacing(-1.6),
  },
  optionsTypes: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
  },
  optionsTypesName: {
    margin: theme.spacing(0.4, 0),
  },
  optionsButtonContainer: {
    padding: theme.spacing(3, 4),
  },
  optionPriceBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  spinner: {
    width: "17px",
    height: "17px",
    border: `2px solid white`,
    borderTop: `2px solid transparent`,
    borderRadius: "50%",
    animation: "$spin 1s linear infinite",
  },
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));
