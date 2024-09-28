import { makeStyles } from "@mui/styles";

export const useSwipeAble = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    gap: "30px",
    flexWrap: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflowX: "scroll",
    scrollbarWidth: "none",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      gap: "24px",
    },
  },
}));
