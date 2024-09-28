import { makeStyles } from "@mui/styles";
export var useEuBlock4Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                padding: theme.spacing(4, 0),
                position: "relative",
            });
        },
        container: {
            width: "85%",
            maxWidth: theme.euStyles.maxWidth,
            margin: "0 auto",
        },
        block: (_a = {
                display: "flex",
                gap: theme.spacing(3.75)
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
            },
            _a["&.layout-2,&.layout-3,&.layout-4"] = (_b = {
                    flexDirection: "row-reverse"
                },
                _b[theme.breakpoints.down("lg")] = {
                    flexDirection: "column",
                },
                _b),
            _a["&.layout-4"] = (_c = {},
                _c[theme.breakpoints.down("xl")] = {
                    flexDirection: "row-reverse",
                },
                _c),
            _a),
        backgroundContainer: (_d = {
                position: "relative",
                minHeight: "250px"
            },
            _d[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _d["&.layout-3,&.layout-4,&.layout-5"] = {
                minHeight: 0,
            },
            _d),
        redBackground: function (props) {
            var _a;
            var _b;
            return (_a = {
                    height: "2%",
                    width: "1%",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
                    borderRadius: "5.6px",
                    position: "absolute",
                    top: "4%",
                    right: "8%",
                    "&.layout-3,&.layout-4": {
                        top: "13%",
                        right: "25%",
                    }
                },
                _a[theme.breakpoints.down("md")] = {
                    display: "none",
                },
                _a["&.layout-5"] = {
                    top: "4%",
                    right: "8%",
                },
                _a);
        },
        goldBackground: function (props) {
            var _a;
            var _b;
            return (_a = {
                    height: "2%",
                    width: "1%",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
                    transform: "matrix(0.91, -0.42, 0.42, 0.91, 0, 0)",
                    borderRadius: "5.6px",
                    position: "absolute",
                    top: "5%",
                    right: "42%",
                    "&.layout-3,&.layout-4": {
                        top: "13%",
                        left: "25%",
                    }
                },
                _a[theme.breakpoints.down("md")] = {
                    display: "none",
                },
                _a["&.layout-5"] = {
                    top: "9%",
                    left: "45%",
                },
                _a);
        },
        backgroundImage: {
            transform: "rotate(-19.38deg)",
            height: 147,
            width: 147,
            right: "2%",
            bottom: "30%",
            position: "absolute",
        },
        backgroundImageLeft: {
            transform: "rotate(-59.95deg)",
            right: "0",
            left: "2%",
            height: 105,
            width: 105,
        },
        sectionHead: (_e = {
                display: "flex",
                gap: "30px"
            },
            _e[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
            },
            _e["&.layout-3"] = (_f = {
                    flexDirection: "row-reverse"
                },
                _f[theme.breakpoints.down("lg")] = {
                    flexDirection: "column",
                },
                _f),
            _e["&.layout-3,&.layout-4"] = (_g = {
                    gap: "70px",
                    flexDirection: "column",
                    maxWidth: "50%",
                    margin: "0 auto"
                },
                _g[theme.breakpoints.down("xl")] = {
                    gap: "90px",
                    maxWidth: "100%",
                },
                _g[theme.breakpoints.down("md")] = {
                    gap: "40px",
                    maxWidth: "100%",
                },
                _g),
            _e),
        sectionContent: {
            flex: 1,
            "&.layout-3,&.layout-4": {
                "& img": {
                    display: "none",
                },
            },
        },
        blockContent: {
            flex: 1,
            "&.img": (_h = {},
                _h[theme.breakpoints.down("lg")] = {
                    order: 0,
                },
                _h),
            order: 1,
            position: "relative",
        },
        blockOverline: function (props) {
            var _a, _b;
            return {
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
                fontSize: theme.euDesign.typography.bodySm,
                textTransform: "uppercase",
                marginBottom: theme.spacing(2),
                margin: 0,
                "&.layout-3,&.layout-4": {
                    textAlign: "center",
                },
            };
        },
        blockHeading: function (props) {
            var _a, _b;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
                fontWeight: theme.euDesign.typography.fontWeightBold,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                fontSize: theme.euDesign.typography.h4,
                margin: 0,
                "&.layout-3,&.layout-4": {
                    textAlign: "center",
                },
            });
        },
        blockCaption: function (props) {
            var _a, _b;
            return ({
                fontSize: theme.euDesign.typography.bodySm,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                marginTop: theme.spacing(0.5),
                margin: 0,
                "&.layout-3,&.layout-4": {
                    textAlign: "center",
                },
            });
        },
        block4ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
