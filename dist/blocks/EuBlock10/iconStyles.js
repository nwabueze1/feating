import { makeStyles } from "@mui/styles";
export var useNavActionStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        cartButton: function (props) {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h, _j;
            return (_a = {
                    display: "inline-flex",
                    padding: theme.spacing(1.5, 2.5),
                    cursor: "pointer",
                    gap: theme.spacing(0.5),
                    alignItems: "center",
                    justifyContent: "center",
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                    border: "none",
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[700],
                    fontSize: theme.euDesign.typography.bodySm,
                    borderRadius: theme.spacing(0.4),
                    fontFamily: (_d = props === null || props === void 0 ? void 0 : props.fonts) === null || _d === void 0 ? void 0 : _d.body,
                    order: 3,
                    transition: "background .3s",
                    textDecoration: "none",
                    "&:hover": {
                        background: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[800],
                        cursor: "pointer",
                    }
                },
                _a[theme.breakpoints.down(1200)] = {
                    padding: theme.spacing(1.1, 2),
                    fontSize: theme.euDesign.typography.bodySm - 4,
                },
                _a[theme.breakpoints.down("md")] = {
                    background: "none",
                    color: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[200],
                    fontSize: theme.euDesign.typography.bodySm - 2,
                    "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                        padding: theme.spacing(1),
                    },
                    "&.layout-3": {
                        display: "none",
                        "&.drawer": {
                            cursor: "pointer",
                            gap: theme.spacing(0.5),
                            alignItems: "center",
                            justifyContent: "center",
                            color: (_g = props === null || props === void 0 ? void 0 : props.colors) === null || _g === void 0 ? void 0 : _g[100],
                            border: "none",
                            background: (_h = props === null || props === void 0 ? void 0 : props.colors) === null || _h === void 0 ? void 0 : _h[700],
                            borderRadius: theme.spacing(0.4),
                            fontFamily: (_j = props === null || props === void 0 ? void 0 : props.fonts) === null || _j === void 0 ? void 0 : _j.body,
                            display: "inline-flex",
                            padding: theme.spacing(1.1, 2),
                            fontSize: theme.euDesign.typography.bodySm - 4,
                        },
                    },
                },
                _a);
        },
        cartIconContainer: {
            position: "relative",
            top: 1.5,
            display: "block",
        },
        badge: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    height: "75%",
                    width: "90%",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                    position: "absolute",
                    fontSize: theme.typography.fontSize - 4,
                    top: "-51%",
                    left: "64%"
                },
                _a[theme.breakpoints.down(1200)] = {
                    height: "65%",
                    width: "82%",
                    fontSize: theme.typography.fontSize - 6,
                    top: "-20%",
                    left: "60%",
                },
                _a);
        },
        toggleButton: (_a = {
                position: "relative",
                top: 0.5,
                padding: 0,
                margin: 0,
                background: "transparent",
                outline: "none",
                border: 0,
                cursor: "pointer",
                display: "none"
            },
            _a[theme.breakpoints.down(1200)] = {
                display: "inline-block",
                order: 4,
            },
            _a),
        toggleIcon: {
            fontSize: theme.typography.fontSize * 2,
        },
        iconContainer: {
            display: "flex",
            gap: theme.spacing(1),
        },
        overlay: (_b = {
                width: "100vw",
                height: 0,
                backgroundColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[1000]; },
                position: "absolute",
                zIndex: 10,
                opacity: 0,
                transition: "opacity .3s ease",
                "&.active": {
                    height: "95vh",
                    opacity: 0.6,
                    zIndex: 5,
                }
            },
            _b[theme.breakpoints.up("lg")] = {
                height: 0,
            },
            _b),
    });
});
