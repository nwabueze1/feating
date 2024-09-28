import { makeStyles } from "@mui/styles";
export var useContactInfoStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: (_a = {
                display: "flex",
                gap: theme.spacing(1.53375),
                alignItems: "center",
                fontFamily: theme.euDesign.font.poppins
            },
            _a[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(0.7),
            },
            _a),
        icon: (_b = {
                fontSize: theme.spacing(3.5),
                color: theme.euDesign.colors.black
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _b),
        textContainer: {
            whiteSpace: "nowrap",
            textAlign: "start",
        },
        title: (_c = {
                fontSize: theme.euDesign.typography.bodyMin,
                color: theme.euDesign.colors.neutral_700,
                fontWeight: 600,
                margin: 0
            },
            _c[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize - 2,
            },
            _c),
        subTitle: (_d = {
                fontSize: theme.euDesign.typography.bodyMin,
                color: theme.euDesign.colors.secondary_main,
                margin: theme.spacing(0.2, 0)
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.caption - 2,
                whiteSpace: "nowrap",
                margin: 0,
            },
            _d),
    });
});
