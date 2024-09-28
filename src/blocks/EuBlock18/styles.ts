import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../types";

export const useEuBlockStyles18 = makeStyles<Theme, CustomThemeProps>((theme: any) => ({
  root: (props) => ({
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[100],
    background: props?.colors?.[500],
    padding: theme.spacing(7, 0),
  }),
  container: {
    width: "85%",
    margin: "auto",
    maxWidth: theme.euStyles.maxWidth,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: theme.spacing(8),
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      gridTemplateColumns: "1fr",
      gap: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(4),
    },
  },
  containerLeftSideImage: {
    width: "100%",
    height: "600px",
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
    borderRadius: "4px",
    objectFit: "cover",
    "&.layout-5,&.layout-3,&.layout-2": {
      borderRadius: "unset",
    },
  },
  containerLeftSide: (props) => ({
    display: "flex",
    "&.layout-2": {
      border: `25px solid ${props?.colors?.[600]}`,
    },
    "&.layout-3": {
      borderBottom: `25px solid ${props?.colors?.[600]}`,
      borderLeft: `25px solid ${props?.colors?.[600]}`,
      borderTop: `25px solid ${props?.colors?.[500]}`,
      borderRight: `25px solid ${props?.colors?.[500]}`,
    },
    "&.layout-4,&.layout-5": {
      gridColumn: "2/3",
      gridRow: "1/2",
    },
    "&.layout-5": {
      padding: theme.spacing(2.5, 3),
      border: `1px solid ${props?.colors?.[700]}`,
    },
  }),
  containerRightSide: {
    "&.layout-4,&.layout-5": {
      gridColumn: "1/2",
      gridRow: "1/2",
    },
  },
  header: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontSize: theme.euDesign.typography.h1,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h3,
      lineHeight: "45px",
    },
    margin: 0,
    lineHeight: "72.8px",
  }),
  textSubHeader: (props) => ({
    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
    color: props?.colors?.[200],
    textTransform: "uppercase",
    fontSize: theme.typography.fontSize - 2,
  }),
  textCurrency: (props) => ({
    color: props?.colors?.[300],
  }),
  textPrice: (props) => ({
    fontSize: theme.euDesign.typography.h2,
    margin: 0,
    fontWeight: theme.euDesign.typography.fontWeightBold,
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
    borderTop: `1px solid ${props?.colors?.[400]}`,
  }),
  addToCartContainer: (props) => ({
    borderTop: `1px solid ${props?.colors?.[400]}`,
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2.5),
    flexWrap: "wrap",

    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  }),
  addQuantity: (props) => ({
    display: "flex",
    border: `1px solid ${props?.colors?.[600]}`,
    color: props?.colors?.[600],
    width: "170px",
    height: "59px",
    borderRadius: "30px",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: theme.euDesign.typography.h5,
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  }),
  divisionLine: (props) => ({
    width: "100%",
    height: "2px",
    background: props?.colors?.[400],
  }),
  descriptionHeader: {
    fontWeight: theme.euDesign.typography.fontWeightBold,
  },
  descriptionContainer: (props) => ({
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${props?.colors?.[400]}`,
  }),
  successModal: (props) => ({
    color: props?.colors?.[300],
    fontSize: theme.euDesign.typography.h5,
    display: "flex",
    gap: theme.spacing(1),
    marginTop: "20vh",
    padding: theme.spacing(2, 4),
    alignItems: "center",
    justifyContent: "space-between",
    "&.success": {
      color: props?.colors?.[600],
    },
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
  quantitySign: {
    cursor: "pointer",
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
  block18ActiveElement: {
    border: "1px dashed",
    borderColor: theme.euDesign.colors.green_primary,
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
