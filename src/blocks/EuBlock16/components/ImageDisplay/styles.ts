import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageDisplayPropsType } from "./";

export const useImageDisplayStyles = makeStyles<Theme, ImageDisplayPropsType>((theme: Theme) => ({
  root: {
    display: "flex",
    gap: "2%",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
    },
    height: "100%",
    minHeight: "100%",
  },
  background1: {
    minHeight: "600px",
    background: (props) => `url('${props.image?.src}')`,
    backgroundSize: "cover !important",
    width: "50%",
    backgroundPosition: "left center !important",
    "&.image-2": {
      backgroundPosition: "right center !important",
    },
    [theme.breakpoints.down("xl")]: {
      backgroundPosition: "18% 0 !important",
    },
    backgroundRepeat: "no-repeat !important",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      backgroundPosition: "0 0",
      minHeight: "50%",
      "&.image-2": {
        backgroundPosition: "58% 89% !important",
        backgroundSize: "auto !important",
      },
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "30vh",
      maxHeight: "30vh",
      "&.image-2": {
        backgroundPosition: "50% 67% !important",
      },
    },
  },
  background2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: theme.spacing(2),
    height: "100%",

    [theme.breakpoints.up("md")]: {
      minHeight: 600,
    },
  },
  background3: {
    background: (props) => `url('${props.image?.src}')`,
    height: "100%",
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    minHeight: 600,
    
    [theme.breakpoints.down("lg")]: {
      height: "45vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35vh",
    },
  },
  item: {
    background: (props) => `url('${props.image?.src}')`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "cover !important",
    borderRadius: theme.spacing(0.5),
    minHeight: "20vh",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      "&.layout-3,&.layout-4": {
        minHeight: "25vh",
        backgroundPosition: "90% 20% !important",
      },
      "&:first-child": {
        backgroundSize: "unset !important",
        backgroundPosition: "10% 15% !important",
        "&.layout-4": {
          gridRow: "span 2",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&.layout-3": {
        minHeight: "25vh",
        backgroundPosition: "0% 0% !important",
      },
      "&:first-child": {
        backgroundSize: "cover !important",
        backgroundPosition: "0% 30% !important",
        "&.layout-4": {
          gridRow: "2",
          gridColumn: "span 2",
        },
      },
    },
    "&:nth-of-type(2)": {
      gridRow: "span 3",
      alignSelf: "center",
      "&.layout-4": {
        gridColumn: "1",
        gridRowStart: "1",
        gridRowEnd: "stretch",
      },
      [theme.breakpoints.down("lg")]: {
        gridRow: "2",
        gridColumn: "span 2",
        gridRowStart: "2",
        "&.layout-4": {
          gridRowEnd: "auto",
        },
      },
      [theme.breakpoints.down("sm")]: {
        gridRow: "1",
      },
    },
    backgroundPosition: "84% 20% !important",
    "&:last-of-type": {
      backgroundPosition: "0% 100% !important",
      [theme.breakpoints.down("lg")]: {
        backgroundSize: "unset !important",
        backgroundPosition: "55% 79% !important",
      },
    },
  },
  innerImage: {
    height: "90%",
    minHeight: "50vh",
    margin: "auto 0",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "0% 100% !important",
    backgroundSize: "cover !important",
    [theme.breakpoints.down("lg")]: {
      "&.layout-3": {
        minHeight: "25vh",
        backgroundPosition: "0% 93% !important",
        height: "auto",
      },
      "&.layout-4": {
        minHeight: "40dvh",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "&.layout-3": {
        backgroundPosition: "0% 10% !important",
      },
    },
  },
}));
