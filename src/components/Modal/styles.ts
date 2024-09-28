import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useModalStyles = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "fixed",
    "&.TopCenter": {
      alignItems: "flex-start",
    },
  },
  modal: {
    width: "70%",
    [theme.breakpoints.up(1240)]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
    zIndex: 6,
    overflow: "hidden",
    "&.TopCenter": {
      paddingTop: theme.spacing(5),
    },
  },
  modalContent: (props) => ({
    backgroundColor: props?.colors?.[500],
    borderRadius: "4px",
    boxShadow: theme.euDesign.shadows[7],
    width: "100%",
  }),
  closeButton: (props) => ({
    backgroundColor: props?.colors?.[200],
    border: "none",
    padding: theme.spacing(1, 2),
    cursor: "pointer",
    position: "absolute",
    right: "-24px",
    top: "-16px",
    [theme.breakpoints.down("sm")]: {
      right: "-15px",
      top: "-13px",
      padding: theme.spacing(0.5, 0.7),
    },
  }),
  modalOverlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundColor: theme.euDesign.getShadow(0.6),
    zIndex: 5,
  },
}));
