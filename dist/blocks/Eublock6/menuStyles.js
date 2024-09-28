import { makeStyles } from "@mui/styles";
export var useMenuStyles = makeStyles(function (theme) {
    var _a;
    return (_a = {
            menuContent: function (props) {
                var _a, _b;
                var _c;
                return (_a = {
                        position: "sticky",
                        height: "100%",
                        top: 0,
                        zIndex: 10,
                        background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                        marginBottom: theme.spacing(5),
                        "&.layout-3": (_b = {
                                marginTop: theme.spacing(5)
                            },
                            _b[theme.breakpoints.down("lg")] = {
                                marginBottom: theme.spacing(2.5),
                            },
                            _b[theme.breakpoints.down("md")] = {
                                marginBottom: theme.spacing(2),
                            },
                            _b[theme.breakpoints.down("sm")] = {
                                marginBottom: theme.spacing(1),
                            },
                            _b)
                    },
                    _a[theme.breakpoints.down("lg")] = {
                        marginBottom: theme.spacing(2.5),
                    },
                    _a[theme.breakpoints.down("md")] = {
                        marginBottom: theme.spacing(2),
                    },
                    _a[theme.breakpoints.down("sm")] = {
                        marginBottom: theme.spacing(1),
                    },
                    _a[theme.breakpoints.down("lg")] = {
                        margin: theme.spacing(2.5, 0),
                    },
                    _a[theme.breakpoints.down("md")] = {
                        margin: theme.spacing(2, 0),
                    },
                    _a[theme.breakpoints.down("sm")] = {
                        margin: theme.spacing(1, 0),
                    },
                    _a);
            }
        },
        _a[theme.breakpoints.down("lg")] = {
            margin: theme.spacing(2.5, 0),
        },
        _a[theme.breakpoints.down("md")] = {
            margin: theme.spacing(2, 0),
        },
        _a[theme.breakpoints.down("sm")] = {
            margin: theme.spacing(1, 0),
        },
        _a);
});
