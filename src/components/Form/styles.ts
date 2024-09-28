import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useFormStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
}));
