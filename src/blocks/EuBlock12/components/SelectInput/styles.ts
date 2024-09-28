import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useSelectInputStyles = makeStyles((theme: Theme) => ({
  customSelect: {
    position: "relative",
    display: "inline-block",
    border: `1px solid ${theme.euDesign.colors.light_grey}`,
    width: "100%",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1, 1.2),
  },
  select: {
    appearance: "none",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    borderRadius: 4,
    backgroundColor: theme.euDesign.colors.white,
    cursor: "pointer",
    width: "100%",
    outline: "none",
    border: "none",
    fontFamily: theme.euDesign.font.poppins,
    textAlign: "left",
  },
  selectIcon: {
    position: "absolute",
    top: "50%",
    right: 8,
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    zIndex: 999,
    backgroundColor: theme.euDesign.colors.white,
    boxShadow: `0px 4px 8px ${theme.euDesign.shadows[600]}`,
    borderRadius: 4,
    marginTop: 4,
    fontFamily: theme.euDesign.font.poppins,
  },
  dropdownItem: {
    padding: "8px 16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: theme.euDesign.colors.medium_white,
    },
  },
}));
