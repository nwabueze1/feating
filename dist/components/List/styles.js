import { makeStyles } from "@mui/styles";
export var useListStyle = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        list: (_a = {
                display: "flex",
                gap: theme.spacing(2),
                alignItems: "center"
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _a),
        listImage: (_b = {
                width: "149px",
                height: "127px",
                objectFit: "cover"
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
                height: "150px",
            },
            _b),
        listContent: (_c = {
                width: "calc(100% - 165px)"
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _c),
        listHeading: function (props) {
            var _a;
            var _b, _c;
            return _a = {
                    fontSize: theme.euDesign.typography.bodyLg,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[700],
                    margin: theme.spacing(0, 0, 1, 0),
                    fontWeight: theme.euDesign.typography.fontWeightBold,
                    fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
                    textTransform: "capitalize"
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodySm,
                },
                _a;
        },
        listBody: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    fontSize: theme.typography.fontSize,
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[800],
                    margin: 0,
                    fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodyMin - 2,
                },
                _a);
        },
        reverseItems: {
            flexDirection: "row-reverse",
        },
    });
});
