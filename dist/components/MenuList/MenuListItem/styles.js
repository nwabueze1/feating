import { makeStyles } from "@mui/styles";
export var useMenuListItem = makeStyles(function (theme) { return ({
    container: function (props) {
        var _a;
        var _b, _c, _d, _e;
        return (_a = {
                padding: theme.spacing(2.2, 2),
                width: "auto",
                borderRadius: "0px 50px 50px 0px",
                display: "flex",
                gap: theme.spacing(2),
                alignItems: "center",
                margin: theme.spacing(0.5, 0),
                transition: "background .3s ease-in",
                "&:hover": {
                    cursor: "pointer",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
                },
                "&.active": {
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[500],
                }
            },
            _a[theme.breakpoints.down("lg")] = { width: "auto" },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(1, 1.2),
                borderRadius: theme.spacing(6.25),
                maxWidth: "auto",
                gap: theme.spacing(1),
                border: "1px solid ".concat((_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[400]),
                whiteSpace: "nowrap",
                marginRight: theme.spacing(1),
                width: "auto",
            },
            _a["&.mobile"] = {
                padding: theme.spacing(1),
                borderRadius: theme.spacing(7.5),
                gap: theme.spacing(1),
                border: "1px solid ".concat((_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[400]),
                whiteSpace: "nowrap",
                marginRight: theme.spacing(1),
                width: "auto",
                justifyContent: "center",
            },
            _a);
    },
    image_container: function (props) {
        var _a;
        var _b, _c;
        return (_a = {
                height: 48,
                width: 48,
                borderRadius: "100%",
                padding: theme.spacing(1) + 1,
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600],
                "&.active": {
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                }
            },
            _a[theme.breakpoints.down("md")] = {
                height: 32,
                width: 32,
                padding: theme.spacing(0.5),
            },
            _a["&.mobile"] = {
                height: 28,
                width: 28,
                padding: theme.spacing(0.5),
            },
            _a);
    },
    image: {
        height: "80%",
        width: "80%",
        objectFit: "cover",
        borderRadius: "100%",
    },
    title: function (props) {
        var _a;
        var _b, _c, _d;
        return (_a = {
                fontSize: theme.typography.fontSize,
                fontWeight: 400,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                margin: 0,
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                "&.active": {
                    fontWeight: 600,
                    color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[100],
                }
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize,
            },
            _a["&.mobile"] = {
                fontSize: theme.typography.fontSize,
            },
            _a);
    },
}); });
