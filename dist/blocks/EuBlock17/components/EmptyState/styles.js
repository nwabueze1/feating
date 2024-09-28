import { makeStyles } from "@mui/styles";
export var useEmptyStateStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                width: "400px",
                margin: "auto",
                "& img": {
                    width: "100%",
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "350px",
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "230px",
            },
            _a),
        description: (_b = {
                fontSize: "28px",
                fontWeight: theme.euDesign.typography.fontWeightBold,
                textAlign: "center"
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.euDesign.typography.h5,
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _b),
    });
});
