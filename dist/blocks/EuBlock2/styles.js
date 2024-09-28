import { makeStyles } from "@mui/styles";
export var useBlog2BlockStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                padding: theme.spacing(6, 0),
                overflowWrap: "anywhere",
                "& button": {
                    margin: "0 !important",
                },
            });
        },
        container: {
            width: "85%",
            margin: "0 auto",
            maxWidth: theme.euStyles.maxWidth,
        },
        blogContainer: (_a = {
                display: "flex",
                gap: "3%",
                justifyContent: "space-between",
                alignItems: "center",
                "&.layout-2": {
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                },
                "&.layout-3": {
                    flexDirection: "row-reverse",
                },
                "&.layout-4": {
                    flexDirection: "initial",
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
                "&.layout-2": {
                    flexDirection: "column",
                },
                "&.layout-3": {
                    flexDirection: "column",
                },
                "&.layout-4": {
                    flexDirection: "column",
                },
            },
            _a),
        blockContent: {
            flex: 1,
        },
        blogOverline: function (props) {
            var _a;
            return ({
                fontSize: theme.typography.fontSize + 2,
                fontWeight: 600,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                margin: 0,
                textTransform: "uppercase",
            });
        },
        blogTitle: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    fontSize: theme.typography.fontSize * 3 - 2,
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                    fontWeight: 700,
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[300],
                    margin: 0,
                    lineHeight: "62px"
                },
                _a[theme.breakpoints.up("xl")] = {
                    fontSize: theme.euDesign.typography.h1,
                },
                _a[theme.breakpoints.down("lg")] = {
                    maxWidth: "100%",
                    marginBottom: "16px !important",
                },
                _a[theme.breakpoints.down("md")] = {
                    fontSize: theme.typography.fontSize * 3 - 2,
                    maxWidth: "100%",
                    lineHeight: "50px !important",
                },
                _a);
        },
        layout5Text: {
            "&.layout-5": (_b = {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: theme.spacing(1),
                    "& h4": {
                        textAlign: "center",
                    }
                },
                _b[theme.breakpoints.down("sm")] = {
                    marginBottom: theme.spacing(1),
                },
                _b),
        },
        blogBody: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    fontSize: theme.typography.fontSize + 4,
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                    color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[400],
                    lineHeight: theme.spacing(4.5),
                    fontWeight: 400,
                    maxWidth: 761,
                    marginTop: theme.spacing(2.5)
                },
                _a[theme.breakpoints.up(1728)] = {
                    fontSize: theme.typography.fontSize * 2 - 4,
                },
                _a[theme.breakpoints.down("md")] = {
                    lineHeight: "24px",
                    fontSize: theme.typography.fontSize + 2,
                    textSAlign: "justify",
                },
                _a);
        },
        blogImageContainer: function (props) {
            var _a;
            var _b, _c;
            return ({
                width: "100%",
                "&.layout-3,&.layout-4,&.layout-5": (_a = {
                        background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                        borderRadius: theme.spacing(2),
                        padding: theme.spacing(2, 3)
                    },
                    _a[theme.breakpoints.down("lg")] = {
                        padding: 0,
                        background: "none",
                        "&.layout-3,&.layout-4,&.layout-5": {
                            padding: theme.spacing(1, 1.5),
                            background: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[500],
                        },
                    },
                    _a),
            });
        },
        blogImage: (_c = {
                height: 500,
                width: "100%",
                objectFit: "cover"
            },
            _c[theme.breakpoints.down("sm")] = {
                objectFit: "cover",
                borderRadius: 12,
                fontSize: theme.typography.fontSize * 2.6,
                height: "100%",
                minHeight: "unset !important",
            },
            _c),
        buttonContainer: (_d = {
                display: "flex",
                whiteSpace: "nowrap",
                marginTop: theme.spacing(3),
                gap: theme.spacing(1)
            },
            _d[theme.breakpoints.down("md")] = {
                justifyContent: "center",
            },
            _d),
        block2ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
