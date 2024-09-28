import { makeStyles } from "@mui/styles";
export var useEuBlock9Styles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a;
        return ({
            padding: theme.spacing(6, 0),
            background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            position: "relative",
        });
    },
    blockContent: function (props) {
        var _a, _b;
        var _c;
        return (_a = {
                flex: 1,
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                width: "46%",
                position: "relative",
                "&.layout-3": (_b = {
                        width: "50%"
                    },
                    _b[theme.breakpoints.down(1030)] = {
                        width: "100%",
                    },
                    _b)
            },
            _a[theme.breakpoints.down(1030)] = {
                width: "100%",
                "&.image-container": {
                    display: "flex",
                    justifyContent: "center",
                },
            },
            _a["&.layout-2"] = {
                flexDirection: "row-reverse",
            },
            _a["&.layout-4, &.layout-5"] = {
                width: "100%",
            },
            _a);
    },
    blockOverline: function (props) {
        var _a;
        var _b, _c;
        return (_a = {
                fontSize: theme.euDesign.typography.overline,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                textTransform: "capitalize",
                margin: 0,
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200]
            },
            _a[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.overline,
                "&.layout-3,&.layout-4,&.layout-5": {
                    textAlign: "center",
                },
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.overline - 4,
            },
            _a);
    },
    blockHeading: function (props) {
        var _a, _b;
        var _c, _d;
        return (_a = {
                fontSize: theme.euDesign.typography.h2,
                fontWeight: theme.euDesign.typography.fontWeightBold,
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.heading,
                margin: theme.spacing(1.3, 0),
                color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[300],
                marginBottom: theme.spacing(5)
            },
            _a[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.h2 - 2,
                margin: theme.spacing(1, 0),
            },
            _a["&.layout-3,&.layout-4,&.layout-5"] = (_b = {
                    maxWidth: "45%"
                },
                _b[theme.breakpoints.only("lg")] = {
                    minWidth: "75%",
                },
                _b[theme.breakpoints.down(1030)] = {
                    maxWidth: "100%",
                    textAlign: "center",
                },
                _b),
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h3,
                maxWidth: "100%",
                marginBottom: theme.spacing(3),
                "&.layout-4,&.layout-5": {
                    textAlign: "start",
                },
            },
            _a);
    },
    testament: function (props) {
        var _a;
        var _b;
        return (_a = {
                width: "48%",
                minWidth: "48%",
                minHeight: "100%",
                "&.layout-5": {
                    border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[1100]),
                    padding: theme.spacing(1.5),
                    borderRadius: theme.spacing(1.5),
                    minWidth: "48%",
                    width: "48%",
                }
            },
            _a[theme.breakpoints.down("xl")] = {
                minWidth: "45%",
            },
            _a[theme.breakpoints.down(1030)] = {
                minWidth: "65%",
            },
            _a[theme.breakpoints.down("sm")] = {
                minWidth: "100% !important",
            },
            _a);
    },
    testimonySub: function (_a) {
        var colors = _a.colors;
        return ({
            fontSize: theme.euDesign.typography.bodyMin,
            color: colors === null || colors === void 0 ? void 0 : colors[400],
            margin: theme.spacing(0.5, 0),
        });
    },
    testimony: function (_a) {
        var colors = _a.colors;
        return ({
            fontSize: theme.euDesign.typography.bodySm,
            color: colors === null || colors === void 0 ? void 0 : colors[500],
            margin: 0,
            marginTop: theme.spacing(3),
        });
    },
    scrollButton: function (_a) {
        var _b;
        var colors = _a.colors;
        return ({
            width: "48px",
            height: "48px",
            background: colors === null || colors === void 0 ? void 0 : colors[600],
            color: colors === null || colors === void 0 ? void 0 : colors[700],
            fontSize: theme.typography.fontSize - 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            border: "none",
            outline: "none",
            cursor: "pointer",
            "&.outlined": {
                color: colors === null || colors === void 0 ? void 0 : colors[900],
                background: colors === null || colors === void 0 ? void 0 : colors[1000],
            },
            "& svg": {
                fontSize: "18px",
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
            },
            "&.layout-5": (_b = {
                    position: "absolute",
                    right: "4.4%",
                    bottom: "27%",
                    "&.left": {
                        left: "4.2%",
                    }
                },
                _b[theme.breakpoints.down("xl")] = {
                    right: "unset",
                    bottom: "unset",
                    position: "relative",
                    "&.left": {
                        left: "unset",
                    },
                },
                _b),
        });
    },
    block8ActiveElement: {
        border: "1px dashed",
        borderColor: theme.euDesign.colors.green_primary,
    },
}); });
