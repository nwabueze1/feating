import { makeStyles } from "@mui/styles";
export var useEuBlockStyles17 = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: function (props) {
            var _a, _b;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                colors: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                padding: theme.spacing(4, 0),
            });
        },
        cartHeader: function (props) {
            var _a;
            var _b;
            return (_a = {
                    fontSize: theme.euDesign.typography.h3,
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                    marginBottom: theme.spacing(3)
                },
                _a[theme.breakpoints.down("lg")] = {
                    fontSize: theme.euDesign.typography.h4,
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.h5,
                    marginBottom: theme.spacing(2),
                },
                _a);
        },
        cartContainer: {
            width: "85%",
            maxWidth: theme.euStyles.maxWidth,
            margin: "auto",
        },
        cartContent: (_a = {},
            _a[theme.breakpoints.up("lg")] = {
                display: "flex",
                gap: theme.spacing(4),
            },
            _a),
        cartCheckout: (_b = {
                width: "100%",
                marginBottom: theme.spacing(2)
            },
            _b[theme.breakpoints.up("lg")] = {
                width: "55%",
                marginBottom: 0,
            },
            _b),
        cartSidebar: (_c = {
                width: "100%"
            },
            _c[theme.breakpoints.up("lg")] = {
                width: "46%",
            },
            _c),
        cartContainerBack: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            marginBottom: theme.spacing(4),
            cursor: "pointer",
            "& p": {
                fontSize: theme.euDesign.typography.fontSize + 4,
            },
        },
        cartLoaderContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(5),
        },
    });
});
