import { makeStyles } from "@mui/styles";
export var useQuestionStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        faqBlock: (_a = {
                display: "flex",
                gap: theme.spacing(6.25),
                justifyContent: "center",
                maxWidth: 1128,
                margin: "0 auto",
                textAlign: "start"
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _a),
        faqContent: (_b = {
                width: "calc((100% - 50px) / 2)"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100% !important",
                "&.answer": {
                    display: "none",
                },
            },
            _b),
        faqMenu: (_c = {
                fontSize: theme.euDesign.typography.bodySm,
                listStyle: "none",
                padding: 0,
                margin: 0
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 2,
            },
            _c),
        faqMenuList: function (props) {
            var _a;
            var _b;
            return (_a = {
                    marginBottom: theme.spacing(0.5)
                },
                _a[theme.breakpoints.down("sm")] = {
                    marginBottom: theme.spacing(1.5),
                    "&.active": {
                        height: "100%",
                        borderRadius: "0% 9.5% 9.5% 0%",
                        position: "relative",
                        border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[600]),
                        borderTop: 0,
                    },
                },
                _a);
        },
        faqQuestion: function (props) {
            var _a;
            var _b, _c, _d, _e, _f, _g;
            return (_a = {
                    padding: theme.spacing(2, 2.5, 2, 2),
                    borderRadius: theme.spacing(0, 6.25, 6.25, 0),
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                    fontWeight: theme.typography.fontWeightRegular,
                    transition: "all .5s ease-in",
                    "&.active": {
                        background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[600],
                        color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[300],
                        fontWeight: theme.typography.fontWeightMedium,
                    },
                    margin: 0,
                    "&:hover": {
                        background: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[600],
                        color: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[300],
                        cursor: "pointer",
                    }
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodyMin - 1,
                    padding: theme.spacing(1.5),
                    paddingRight: theme.spacing(2),
                    border: "1px solid ".concat((_g = props === null || props === void 0 ? void 0 : props.colors) === null || _g === void 0 ? void 0 : _g[600]),
                    fontWeight: theme.typography.fontWeightMedium,
                },
                _a);
        },
        faqQuestionHeading: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontSize: theme.typography.fontSize + 4,
                    margin: 0,
                    marginBottom: theme.spacing(2),
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[800],
                    fontWeight: 600
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize + 2,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodyMin,
                },
                _a);
        },
        faqAnswer: (_d = {
                fontSize: theme.euDesign.typography.bodyMin,
                fontWeight: theme.typography.fontWeightRegular
            },
            _d[theme.breakpoints.up("md")] = {
                "&.mobile": {
                    display: "none",
                },
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.bodyMin,
                padding: theme.spacing(1.5, 2, 1.5, 1.5),
            },
            _d),
    });
});
