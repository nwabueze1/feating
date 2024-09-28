import { makeStyles } from "@mui/styles";
export var useEuBlock6Styles = makeStyles(function (theme) {
    var _a;
    return ({
        root: function (props) {
            var _a;
            return ({
                padding: theme.spacing(4, 0),
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
            });
        },
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
        },
        block: function (props) {
            var _a;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
            });
        },
        header: (_a = {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end"
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                "& button": {
                    display: "none",
                },
            },
            _a["&.layout-3"] = { flexDirection: "column", alignItems: "center" },
            _a),
        heading: {
            "&.layout-3": { flex: 1, width: "100%" },
        },
        headerOverline: function (props) {
            var _a;
            return ({
                fontSize: theme.typography.fontSize + 2,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                margin: 0,
                fontWeight: 600,
                "&.layout-3": { textAlign: "center" },
            });
        },
        headerTitle: function (props) {
            var _a;
            var _b;
            return (_a = {
                    maxWidth: "60%",
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                    fontWeight: 700,
                    fontSize: theme.typography.fontSize * 3 + 6,
                    margin: theme.spacing(1, 0)
                },
                _a[theme.breakpoints.only("xl")] = {
                    margin: 0,
                },
                _a[theme.breakpoints.down("lg")] = {
                    maxWidth: "80%",
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize * 2 + 4,
                    maxWidth: "100%",
                },
                _a["&.layout-3"] = { textAlign: "center", maxWidth: 1440 },
                _a);
        },
        caption: function (props) {
            var _a;
            var _b;
            return (_a = {
                    margin: 0
                },
                _a[theme.breakpoints.up("lg")] = {
                    maxWidth: "60%",
                },
                _a.fontSize = theme.euDesign.typography.bodyLg,
                _a.color = (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodySm,
                },
                _a["&.layout-3"] = {
                    textAlign: "center",
                    margin: "0 auto",
                },
                _a);
        },
        scrollButton: function (props) {
            var _a, _b, _c, _d;
            return ({
                width: "48px",
                height: "48px",
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700],
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                fontSize: theme.typography.fontSize - 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: "all ease-in .5s",
                "&:hover": {
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[500],
                    background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[400],
                    cursor: "pointer",
                },
                "& svg": {
                    fontSize: "18px",
                    fontWeight: 600,
                },
            });
        },
        listButtonContainer: {
            display: "flex",
            justifyContent: "center",
        },
        layout3Heading: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        listButton: function (props) {
            var _a, _b;
            return ({
                padding: theme.spacing(2.2, 3.2),
                outline: "none",
                cursor: "pointer",
                fontFamily: (_a = props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                fontSize: theme.typography.fontSize + 4,
                border: "none",
                background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                color: theme.euDesign.colors.white,
                borderRadius: theme.spacing(80),
                width: "40%",
                margin: "16px auto 0 auto",
            });
        },
        block6ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
