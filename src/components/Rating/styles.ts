import { makeStyles } from "@mui/styles";

export const useRatingStyles = makeStyles((theme: any) => ({
  rating: {
    fill: theme.euDesign.colors.gold,
    fontSize: theme.typography.fontSize + 3,
  },
}));
