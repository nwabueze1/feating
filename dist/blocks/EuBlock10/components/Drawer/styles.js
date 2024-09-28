import { makeStyles } from "@mui/styles";
export var useDrawerStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a;
        return ({
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 999,
            height: "100vh",
            background: "red",
            width: "70vw",
            backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            boxShadow: "-2px 3px 4px ".concat(theme.euDesign.getShadow(0.3)),
        });
    },
    container: {
        maxWidth: "89%",
        paddingTop: "5vh",
    },
    navList: {
        listStyle: "none",
        margin: theme.spacing(0, 0, 0, "auto"),
        width: "fit-content",
    },
    navListItem: {
        margin: theme.spacing(3, 0),
        textAlign: "end",
        width: "100%",
    },
    navLink: function (props) {
        var _a;
        var _b, _c, _d;
        return (_a = {
                fontSize: theme.euDesign.typography.h5,
                textDecoration: "none",
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                cursor: "pointer",
                transition: "color .5s ease-in",
                "&:hover": {
                    color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[700],
                }
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5 - 4,
            },
            _a);
    },
    closeIcon: function (props) {
        var _a;
        return ({
            color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
            cursor: "pointer",
            fontSize: theme.typography.fontSize * 2,
            transition: "transform .5s ease-in",
            "&:hover": {
                transform: "scale(1.2)",
            },
        });
    },
    growIn: {
        transformOrigin: "0 0 0",
        "&:enter": {
            transform: "scale(0)",
        },
        "&:enter-active": {
            transform: "scale(1)",
            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        "&:exit": {
            transform: "scale(1)",
        },
        "&:exit-active": {
            transform: "scale(0)",
            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
    },
    block: function (props) {
        var _a;
        return ({
            backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900],
            width: "100%",
            height: "100vh",
            zIndex: -1,
        });
    },
    navCloseParent: function (props) {
        var _a;
        return ({
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: theme.spacing(4),
            width: "fit-content",
            marginLeft: "auto",
            cursor: "pointer",
            "& .close-icon": {
                fontSize: theme.euDesign.typography.fontSize + 15,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
            },
        });
    },
}); });
