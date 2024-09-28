import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useGroupedInputStyles = makeStyles((theme: Theme) => ({
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
}));
