import { makeStyles } from "@mui/styles";
export var useEuBlock11Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflowX: "hidden",
            position: "relative",
            "&.layout-1,&.layout-2": {
                paddingBottom: theme.spacing(3),
            },
        },
        container: function (props) {
            var _a;
            return ({
                maxWidth: theme.euStyles.maxWidth,
                margin: "0 auto",
                width: "85%",
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            });
        },
        overlay: {
            width: "100%",
            height: "100%",
            background: theme.euDesign.getShadow(0.7),
            top: 0,
            left: 0,
            position: "absolute",
            "&.layout-2": {
                background: "linear-gradient(180deg, ".concat(theme.euDesign.colors.black, " 33.78%, ").concat(theme.euDesign.getShadow(0), " 100%)"),
            },
        },
        block: function (props) {
            var _a;
            var _b;
            return ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                textAlign: "center",
                "&.layout-2": {
                    justifyContent: "start",
                    marginTop: theme.spacing(6.25),
                },
                "&.layout-3, &.layout-4": (_a = {},
                    _a[theme.breakpoints.down("sm")] = {
                        height: "unset",
                    },
                    _a),
            });
        },
        blockContent: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
        },
        blockOverline: (_a = {
                margin: 0,
                fontSize: theme.euDesign.typography.overline,
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: 600,
                zIndex: 2
            },
            _a[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.overline - 2,
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.overlineSmall,
            },
            _a),
        blockHeading: (_b = {
                margin: theme.spacing(1, 0),
                fontSize: theme.euDesign.typography.h2,
                zIndex: 2
            },
            _b[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.h3,
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5,
            },
            _b),
        blockSubtitle: function (props) {
            var _a;
            var _b;
            return (_a = {
                    color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[300],
                    fontSize: theme.euDesign.typography.bodyLg,
                    zIndex: 2,
                    margin: "0 auto",
                    maxWidth: "50%"
                },
                _a[theme.breakpoints.down(1030)] = {
                    fontSize: theme.euDesign.typography.bodySm,
                    maxWidth: "100%",
                },
                _a[theme.breakpoints.down("sm")] = {
                    fontSize: theme.euDesign.typography.bodyMin,
                },
                _a);
        },
        ratingContainer: {
            display: "flex",
            gap: theme.spacing(0.5),
            zIndex: 1,
            margin: theme.spacing(1, 0),
        },
        price: {
            fontSize: theme.euDesign.typography.price,
            zIndex: 1,
            margin: theme.spacing(1, 0),
        },
        currency: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
        },
        buttonContainer: {
            zIndex: 1,
            "&.layout-3": {
                marginBottom: theme.spacing(3),
            },
        },
        imageBackground: {
            height: "55vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: theme.spacing(2),
        },
        block11ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
