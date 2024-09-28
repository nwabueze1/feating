import { makeStyles } from "@mui/styles";
export var useEuBlock14Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: function (props) {
            var _a;
            var _b;
            return (_a = {
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400]
                },
                _a[theme.breakpoints.up("md")] = {
                    padding: theme.spacing(6, 0),
                },
                _a);
        },
        container: {
            width: "85%",
            margin: "0 auto",
            maxWidth: theme.euStyles.maxWidth,
        },
        block: (_a = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2%",
                "&.layout-2": (_b = {
                        flexDirection: "row-reverse"
                    },
                    _b[theme.breakpoints.down("md")] = {
                        flexDirection: "column-reverse",
                        gap: "2%",
                    },
                    _b),
                "&.layout-3": (_c = {
                        padding: theme.spacing(4, 0)
                    },
                    _c[theme.breakpoints.up("md")] = {
                        padding: 0,
                    },
                    _c),
                "&.layout-3, &.layout-4": {
                    flexDirection: "column-reverse",
                    gap: theme.spacing(4),
                },
                "&.layout-5": (_d = {
                        flexDirection: "row",
                        gap: theme.spacing(2.5)
                    },
                    _d[theme.breakpoints.down("lg")] = {
                        flexDirection: "column",
                    },
                    _d)
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
                gap: theme.spacing(4),
            },
            _a),
        blockContent: (_e = {
                width: "49%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                "&.image": { width: "49%" },
                "&.layout-3": {
                    width: "100%",
                    "&.image": {
                        backgroundPosition: "center !important",
                        backgroundRepeat: "no-repeat !important",
                        minHeight: 600,
                        backgroundSize: "cover !important",
                    },
                },
                "&.layout-4, &.layout-5": (_f = {
                        width: "100%",
                        "&.image": {
                            backgroundPosition: "center !important",
                            backgroundRepeat: "no-repeat !important",
                            minHeight: 600,
                            backgroundSize: "cover !important",
                        }
                    },
                    _f[theme.breakpoints.up("md")] = {
                        minHeight: 600,
                    },
                    _f)
            },
            _e[theme.breakpoints.down("md")] = {
                width: "100%",
                "&.image": {
                    width: "100%",
                },
            },
            _e),
        blockImage: {
            backgroundPosition: "center !important",
            backgroundRepeat: "no-repeat !important",
            minHeight: 450,
            backgroundSize: "cover !important",
        },
        blockOverline: (_g = {
                fontSize: theme.typography.fontSize + 2,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                margin: 0,
                textTransform: "uppercase",
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; }
            },
            _g[theme.breakpoints.down("xl")] = {
                fontSize: theme.typography.fontSize,
            },
            _g["&.layout-4,&.layout-5"] = {
                textAlign: "center",
            },
            _g),
        blockTitle: (_h = {
                fontSize: theme.euDesign.typography.h2,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                fontWeight: theme.euDesign.typography.fontWeightBold,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                margin: 0,
                maxWidth: "100%"
            },
            _h[theme.breakpoints.up("xl")] = {
                maxWidth: "70%",
            },
            _h[theme.breakpoints.only("xl")] = {
                maxWidth: "100%",
            },
            _h["&.layout-3,&.layout-4,&.layout-5"] = (_j = {},
                _j[theme.breakpoints.up("xl")] = {
                    maxWidth: "37%",
                },
                _j[theme.breakpoints.only("xl")] = {
                    maxWidth: "46%",
                },
                _j[theme.breakpoints.down("lg")] = {
                    maxWidth: "80%",
                },
                _j[theme.breakpoints.down("sm")] = {
                    maxWidth: "100%",
                },
                _j),
            _h["&.layout-4,&.layout-5"] = {
                textAlign: "center",
                margin: "0 auto",
                "&.layout-5": {
                    marginBottom: theme.spacing(3.75),
                },
            },
            _h[theme.breakpoints.down("xl")] = {
                fontSize: theme.euDesign.typography.h3,
            },
            _h[theme.breakpoints.down("md")] = {
                fontSize: theme.euDesign.typography.h4,
                maxWidth: "100%",
            },
            _h),
        blockBody: (_k = {
                fontSize: theme.typography.fontSize + 4,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                lineHeight: theme.spacing(3.5),
                fontWeight: theme.euDesign.typography.fontWeightRegular,
                marginTop: theme.spacing(2.5)
            },
            _k[theme.breakpoints.down("xl")] = {
                lineHeight: "24px",
                fontSize: theme.euDesign.typography.bodySm,
                textAlign: "start",
            },
            _k["&.layout-5"] = (_l = {},
                _l[theme.breakpoints.up("lg")] = {
                    margin: 0,
                },
                _l),
            _k),
        block14ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
