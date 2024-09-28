import { makeStyles } from "@mui/styles";
export var useEuBlock18Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            padding: theme.spacing(6, 3),
            position: "relative",
        },
        blockHeader: {
            fontWeight: 700,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            margin: theme.spacing(1.4, 0),
            lineHeight: theme.spacing(3.75),
            textTransform: "capitalize",
            "&.layout-4": {
                textAlign: "center",
            },
        },
        button: {
            width: 64,
            height: 64,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&.filled": {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
            },
        },
        cardContainer: (_a = {
                maxWidth: 450,
                minWidth: 320
            },
            _a[theme.breakpoints.down("sm")] = {
                minWidth: 250,
            },
            _a["&.layout-2,&.layout-3"] = {
                minWidth: "100%",
            },
            _a),
        block: (_b = {
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: theme.spacing(5)
            },
            _b[theme.breakpoints.only("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
            },
            _b[theme.breakpoints.down("xl")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _b[theme.breakpoints.down("lg")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(3),
            },
            _b[theme.breakpoints.down("md")] = {
                gridTemplateColumns: "repeat(1, 1fr)",
            },
            _b),
        scrollButton: function (props) {
            var _a;
            var _b, _c, _d, _e, _f;
            return (_a = {
                    width: 36,
                    height: 36,
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[900],
                    fontSize: theme.typography.fontSize - 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    transition: "all ease-in .5s",
                    position: "absolute",
                    top: "50%",
                    right: "-1%",
                    bottom: "50%",
                    "&:hover": {
                        color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[500],
                        cursor: "pointer",
                    },
                    "& svg": {
                        fontSize: theme.typography.fontSize,
                        fontWeight: 600,
                    },
                    "&.left": {
                        right: "unset",
                        left: "-1%",
                    },
                    "&:disabled": {
                        color: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[200],
                        background: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[800],
                        cursor: "auto",
                    }
                },
                _a[theme.breakpoints.down("sm")] = {
                    display: "none",
                },
                _a);
        },
        block15ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
