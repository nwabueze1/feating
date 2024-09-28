import { makeStyles } from "@mui/styles";
export var useGroupedInputStyles = makeStyles(function (theme) { return ({
    inputs: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
    },
}); });
