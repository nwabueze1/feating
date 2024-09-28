import { makeStyles } from "@mui/styles";
export var useImageDisplayStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: (_a = {
                display: "flex",
                gap: "2%"
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
                gap: theme.spacing(2),
            },
            _a.height = "100%",
            _a.minHeight = "100%",
            _a),
        background1: (_b = {
                minHeight: "600px",
                background: function (props) { var _a; return "url('".concat((_a = props.image) === null || _a === void 0 ? void 0 : _a.src, "')"); },
                backgroundSize: "cover !important",
                width: "50%",
                backgroundPosition: "left center !important",
                "&.image-2": {
                    backgroundPosition: "right center !important",
                }
            },
            _b[theme.breakpoints.down("xl")] = {
                backgroundPosition: "18% 0 !important",
            },
            _b.backgroundRepeat = "no-repeat !important",
            _b[theme.breakpoints.down("lg")] = {
                width: "100%",
                backgroundPosition: "0 0",
                minHeight: "50%",
                "&.image-2": {
                    backgroundPosition: "58% 89% !important",
                    backgroundSize: "auto !important",
                },
            },
            _b[theme.breakpoints.down("md")] = {
                minHeight: "30vh",
                maxHeight: "30vh",
                "&.image-2": {
                    backgroundPosition: "50% 67% !important",
                },
            },
            _b),
        background2: (_c = {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: theme.spacing(2),
                height: "100%"
            },
            _c[theme.breakpoints.up("md")] = {
                minHeight: 600,
            },
            _c),
        background3: (_d = {
                background: function (props) { var _a; return "url('".concat((_a = props.image) === null || _a === void 0 ? void 0 : _a.src, "')"); },
                height: "100%",
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "cover !important",
                minHeight: 600
            },
            _d[theme.breakpoints.down("lg")] = {
                height: "45vh",
            },
            _d[theme.breakpoints.down("sm")] = {
                height: "35vh",
            },
            _d),
        item: (_e = {
                background: function (props) { var _a; return "url('".concat((_a = props.image) === null || _a === void 0 ? void 0 : _a.src, "')"); },
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "cover !important",
                borderRadius: theme.spacing(0.5),
                minHeight: "20vh",
                overflow: "hidden"
            },
            _e[theme.breakpoints.down("lg")] = {
                "&.layout-3,&.layout-4": {
                    minHeight: "25vh",
                    backgroundPosition: "90% 20% !important",
                },
                "&:first-child": {
                    backgroundSize: "unset !important",
                    backgroundPosition: "10% 15% !important",
                    "&.layout-4": {
                        gridRow: "span 2",
                    },
                },
            },
            _e[theme.breakpoints.down("sm")] = {
                "&.layout-3": {
                    minHeight: "25vh",
                    backgroundPosition: "0% 0% !important",
                },
                "&:first-child": {
                    backgroundSize: "cover !important",
                    backgroundPosition: "0% 30% !important",
                    "&.layout-4": {
                        gridRow: "2",
                        gridColumn: "span 2",
                    },
                },
            },
            _e["&:nth-of-type(2)"] = (_f = {
                    gridRow: "span 3",
                    alignSelf: "center",
                    "&.layout-4": {
                        gridColumn: "1",
                        gridRowStart: "1",
                        gridRowEnd: "stretch",
                    }
                },
                _f[theme.breakpoints.down("lg")] = {
                    gridRow: "2",
                    gridColumn: "span 2",
                    gridRowStart: "2",
                    "&.layout-4": {
                        gridRowEnd: "auto",
                    },
                },
                _f[theme.breakpoints.down("sm")] = {
                    gridRow: "1",
                },
                _f),
            _e.backgroundPosition = "84% 20% !important",
            _e["&:last-of-type"] = (_g = {
                    backgroundPosition: "0% 100% !important"
                },
                _g[theme.breakpoints.down("lg")] = {
                    backgroundSize: "unset !important",
                    backgroundPosition: "55% 79% !important",
                },
                _g),
            _e),
        innerImage: (_h = {
                height: "90%",
                minHeight: "50vh",
                margin: "auto 0",
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "0% 100% !important",
                backgroundSize: "cover !important"
            },
            _h[theme.breakpoints.down("lg")] = {
                "&.layout-3": {
                    minHeight: "25vh",
                    backgroundPosition: "0% 93% !important",
                    height: "auto",
                },
                "&.layout-4": {
                    minHeight: "40dvh",
                },
            },
            _h[theme.breakpoints.down("sm")] = {
                "&.layout-3": {
                    backgroundPosition: "0% 10% !important",
                },
            },
            _h),
    });
});
