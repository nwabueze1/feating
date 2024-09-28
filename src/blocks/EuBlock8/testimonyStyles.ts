import { makeStyles } from "@mui/styles";
export const useTestimonyStyles = makeStyles((theme: any) => ({
  testimonyHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    gap: theme.spacing(0.5),
    width: "100%",
  },
  titleHeading: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(1030)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(1),
    },
  },
  avatarContainer: {
    height: 88.9,
    width: 88.9,
    overflow: "hidden",
    borderRadius: "100%",
  },
  avatar: {
    height: "100%",
    width: "100%",
  },
  testimonyContent: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    gap: theme.spacing(5),
    "&.layout-4, &.layout-5": {
      marginTop: theme.spacing(2),
    },
    "&.layout-5": {
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(5),
      },
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&.layout-2,&.layout-3": {
      flexWrap: "wrap",
      margin: 0,
    },
    "&.layout-3": {
      justifyContent: "space-around",
    },
    scrollSnapType: "x mandatory",
    [theme.breakpoints.down("xl")]: {
      gap: theme.spacing(2.5),
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(5),
    },
  },
  testimonyTitle: {
    fontSize: theme.euDesign.typography.h5,
    margin: theme.spacing(0, 0, 0.5, 0),
    whiteSpace: "nowrap",
    [theme.breakpoints.down(1030)]: {
      fontSize: theme.euDesign.typography.h5 - 1,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.euDesign.typography.h5 - 3,
    },
  },
  ratingContainer: {
    display: "flex",
    gap: theme.spacing(0.4),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      "&.layout-1": {
        display: "none",
      },
    },
  },
  menuContent: {
    overflowX: "auto",
  },
  avatarCardContainer: {
    position: "absolute",
    zIndex: 100,
    top: "7%",
    right: "4%",
    "&.layout-2": {
      right: "4%",
    },
    [theme.breakpoints.only("xl")]: {
      right: "-3%",
      "&.layout-2": {
        right: "0%",
      },
    },
    [theme.breakpoints.down(1030)]: {
      right: "12%",
      top: "22%",
    },
    [theme.breakpoints.down("lg")]: {
      right: "4%",
      top: "17%",
    },
    [theme.breakpoints.down("sm")]: {
      right: "4%",
      top: "12%",
    },

    "&.layout-3": {
      right: "1%",
      [theme.breakpoints.down(1030)]: {
        right: "18%",
      },
      [theme.breakpoints.down("sm")]: {
        right: "4%",
        top: "15%",
      },
    },
  },
}));
