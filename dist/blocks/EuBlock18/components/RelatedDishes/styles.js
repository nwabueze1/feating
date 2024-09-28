import { makeStyles } from "@mui/styles";
export var useRelatedDishes = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            width: "85%",
            margin: "auto",
            maxWidth: theme.euStyles.maxWidth,
            marginTop: theme.spacing(10),
        },
        header: (_a = {
                fontSize: theme.euDesign.typography.h3,
                margin: 0
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.euDesign.typography.h4,
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5,
            },
            _a),
        headerContainer: (_b = {
                display: "flex",
                justifyContent: "space-between"
            },
            _b[theme.breakpoints.down("sm")] = {
                display: "block",
            },
            _b),
    });
});
