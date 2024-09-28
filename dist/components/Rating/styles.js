import { makeStyles } from "@mui/styles";
export var useRatingStyles = makeStyles(function (theme) { return ({
    rating: {
        fill: theme.euDesign.colors.gold,
        fontSize: theme.typography.fontSize + 3,
    },
}); });
