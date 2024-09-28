import { makeStyles } from "@mui/styles";
export var useSearchBarStyles = makeStyles(function (theme) {
    var _a;
    return ({
        container: {
            display: "flex",
            boxSizing: "border-box",
            borderRadius: theme.spacing(0.5),
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]); },
            overflow: "hidden",
            justifyContent: "space-between",
            width: "100%",
        },
        searchInput: {
            outline: "none",
            padding: theme.spacing(1, 1.5),
            fontFamily: theme.euDesign.font.poppins,
            fontSize: theme.typography.fontSize - 2,
            transition: "width 0.5s ease-in",
            width: "100%",
            "&::placeholder": {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            },
            border: 0,
        },
        searchButton: function (props) {
            var _a, _b, _c;
            return ({
                outline: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
                border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500]),
                borderRadius: theme.spacing(0, 0.5, 0.5, 0),
                padding: theme.spacing(2, 2.5),
                cursor: "pointer",
                "&:hover": {
                    background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                },
            });
        },
        searchIcon: (_a = {
                color: theme.euDesign.colors.white,
                fontSize: theme.euDesign.typography.bodySm
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 8,
            },
            _a),
    });
});
