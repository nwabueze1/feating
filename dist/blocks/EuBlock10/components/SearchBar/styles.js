import { makeStyles } from "@mui/styles";
export var useSearchBarStyles = makeStyles(function (theme) { return ({
    navSearch: function (props) {
        var _a;
        var _b, _c, _d, _e;
        return (_a = {
                display: "flex",
                boxSizing: "border-box",
                borderRadius: theme.spacing(0.5),
                border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400]),
                overflow: "hidden",
                justifyContent: "space-between",
                width: "85%",
                transition: "width 0.5s ease"
            },
            _a[theme.breakpoints.up("xl")] = { maxWidth: 519 },
            _a["&.layout-1"] = {
                order: 2,
                flex: 1,
                margin: "0 auto !important",
            },
            _a["&.layout-2"] = {
                width: "auto",
                minWidth: "auto",
                transition: "width 0.4s ease-in",
                "&.open-search": {
                    width: "100%",
                },
            },
            _a["&.layout-3"] = {
                order: 4,
                maxWidth: "auto",
                width: "auto",
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
            },
            _a["&.layout-4,&.layout-5"] = {
                border: 0,
                order: 3,
                justifyContent: "flex-end",
                width: "inherit",
                "&.open-search": {
                    width: "100%",
                    border: "1px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[400]),
                },
            },
            _a.order = 3,
            _a[theme.breakpoints.down(1200)] = {
                "&.layout-3": {
                    flex: 1,
                    order: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                },
                "&.layout-4": {
                    marginLeft: "auto",
                },
                "&.layout-5": {
                    border: "1px solid ".concat((_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[400]),
                },
            },
            _a[theme.breakpoints.down("md")] = {
                margin: theme.spacing(0, 1.5),
                "&.layout-1": {
                    order: 4,
                    width: "100%",
                    minWidth: "100%",
                },
                "&.layout-2": {
                    order: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    border: "none",
                    margin: "".concat(theme.spacing(0, 0, 0, 1.5), " !important"),
                    "&.open-search": {
                        minWidth: "50%",
                        width: "50%",
                        border: "1px solid ".concat((_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[400]),
                    },
                },
                "&.layout-4": {
                    margin: "".concat(theme.spacing(0, 1.5, 0, 1.5), " !important"),
                },
                "&.layout-4,&.layout-5": {
                    order: 3,
                    display: "flex",
                    justifyContent: "flex-end",
                    border: "none",
                },
            },
            _a);
    },
    searchInput: function (props) {
        var _a;
        var _b, _c;
        return (_a = {
                outline: "none",
                padding: theme.spacing(1, 1.5),
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                fontSize: theme.typography.fontSize - 2,
                transition: "width 0.5s ease-in",
                width: "100%",
                "&::placeholder": {
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[500],
                },
                border: 0,
                "&.layout-2,&.layout-4,&.layout-5": {
                    width: 0,
                    display: "none",
                    "&.open-search": {
                        display: "flex",
                        width: "100%",
                    },
                }
            },
            _a[theme.breakpoints.down(1200)] = {
                "&.layout-5": {
                    display: "none",
                },
                padding: theme.spacing(0.2, 1),
            },
            _a[theme.breakpoints.down("md")] = {
                "&.layout-2,&.layout-4,&.layout-5": {
                    width: "10px",
                    display: "none",
                },
                "&.layout-2": {
                    "&.open-search": {
                        minWidth: "30%",
                    },
                },
                "&.open-search": {
                    width: "100%",
                    display: "flex",
                },
            },
            _a);
    },
    searchButton: function (props) {
        var _a;
        var _b, _c, _d, _e, _f;
        return (_a = {
                outline: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600],
                border: "1px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600]),
                borderRadius: theme.spacing(0, 0.5, 0.5, 0),
                padding: theme.spacing(2, 2.5),
                cursor: "pointer",
                transition: "background .3s ease-in",
                "&:hover": {
                    background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[300],
                }
            },
            _a[theme.breakpoints.down(1200)] = {
                padding: theme.spacing(0.9, 2),
                "&.layout-2,&.layout-3": {
                    borderRadius: theme.spacing(0.5),
                    padding: theme.spacing(0.9, 2),
                },
                "&.layout-4": {
                    borderRadius: "100%",
                    padding: theme.spacing(1),
                    background: "none",
                    border: 0,
                    "& svg": {
                        fill: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[600],
                    },
                },
            },
            _a[theme.breakpoints.down("md")] = {
                "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                    borderRadius: "100%",
                    padding: theme.spacing(1),
                    border: "none",
                    background: "none",
                    color: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[600],
                },
            },
            _a);
    },
    searchIcon: function (props) {
        var _a;
        var _b;
        return (_a = {
                color: theme.euDesign.colors.white,
                fontSize: theme.euDesign.typography.bodySm
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 8,
                "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600],
                },
            },
            _a);
    },
}); });
