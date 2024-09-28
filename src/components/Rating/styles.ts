import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useRatingStyles = makeStyles((theme: Theme) => ({
  rating: {
    fill: theme.euDesign.colors.gold,
    fontSize: theme.typography.fontSize + 3,
  },
}));
