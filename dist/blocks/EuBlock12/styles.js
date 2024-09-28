import { makeStyles } from "@mui/styles";
export var useEuBlock12Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: function (props) {
            var _a;
            return ({
                padding: theme.spacing(4, 0),
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            });
        },
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        block: (_a = {
                display: "flex",
                gap: theme.spacing(2),
                justifyContent: "space-between",
                alignItems: "center",
                "&.layout-3": (_b = {
                        flexDirection: "row-reverse",
                        textAlign: "center"
                    },
                    _b[theme.breakpoints.down("lg")] = {
                        flexDirection: "column-reverse",
                    },
                    _b)
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
                gap: theme.spacing(5),
                "&.layout-2,&.layout-4": {
                    flexDirection: "column-reverse",
                },
            },
            _a["&.layout-4, &.layout-5"] = {
                textAlign: "center",
            },
            _a["&.layout-4"] = (_c = {
                    flexDirection: "row-reverse"
                },
                _c[theme.breakpoints.down("lg")] = {
                    flexDirection: "column-reverse",
                },
                _c),
            _a),
        blockContent: (_d = {
                width: "48%"
            },
            _d[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _d),
        blockText: (_e = {},
            _e[theme.breakpoints.down("lg")] = {
                width: "85%",
                margin: "0 auto",
            },
            _e[theme.breakpoints.down("sm")] = {
                width: "100%",
                margin: "0 auto",
            },
            _e),
        heading: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontSize: theme.euDesign.typography.h2,
            fontWeight: 700,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            margin: 0,
        },
        headingColored: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
        },
        subtext: {
            fontSize: theme.euDesign.typography.bodySm,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            margin: theme.spacing(2, 0),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1.5),
            fontFamily: function (props) { var _a; return "".concat((_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body, " !important"); },
            textAlign: "left",
        },
        mapContainer: (_f = {
                backgroundSize: "cover !important",
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "center !important",
                backgroundColor: theme.euDesign.colors.white,
                marginLeft: "auto",
                position: "relative"
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "100% !important",
                display: "flex",
                padding: theme.spacing(8.75, 5),
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "100% !important",
            },
            _f["&.layout-4,&.layout-5"] = (_g = {
                    padding: 0,
                    width: "100% !important",
                    background: "none !important"
                },
                _g[theme.breakpoints.down("sm")] = {
                    minHeight: 400,
                },
                _g),
            _f),
        mapBox: (_h = {
                minHeight: 500,
                position: "initial",
                width: "100%",
                top: "10%",
                left: "-20%"
            },
            _h[theme.breakpoints.down("lg")] = {
                position: "static",
            },
            _h["&.layout-4,&.layout-5"] = (_j = {
                    position: "static",
                    minHeight: 600
                },
                _j[theme.breakpoints.down("sm")] = {
                    minHeight: 400,
                },
                _j),
            _h),
        map: {
            border: function (props) { var _a; return "6px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]); },
            height: "100%",
            width: "100%",
            minHeight: 500,
            "&.layout-4, &.layout-5": (_k = {
                    minHeight: 600
                },
                _k[theme.breakpoints.down("sm")] = {
                    minHeight: 400,
                },
                _k),
        },
        contactInfoContainer: (_l = {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginTop: theme.spacing(6.25)
            },
            _l[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(3),
            },
            _l),
        button: {
            marginRight: 0,
        },
        block12ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
