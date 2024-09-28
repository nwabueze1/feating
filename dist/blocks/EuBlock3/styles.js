import { makeStyles } from "@mui/styles";
export var useEuBlock3Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: function (props) {
            var _a, _b;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                padding: theme.spacing(5, 0),
                "& input": {
                    "&::placeholder": {
                        fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                    },
                },
            });
        },
        container: {
            width: "85%",
            maxWidth: theme.euStyles.maxWidth,
            margin: "0 auto",
        },
        footerContainer: function (props) {
            var _a;
            var _b;
            return (_a = {
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                    flexWrap: "wrap",
                    "&.layout-3": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                },
                _a[theme.breakpoints.down("lg")] = {
                    "&.layout-5": {
                        justifyContent: "start",
                    },
                },
                _a);
        },
        footerList: function (props) {
            var _a, _b, _c;
            var _d;
            return (_a = {
                    listStyle: "none",
                    textDecoration: "none",
                    color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[200],
                    fontSize: theme.typography.fontSize,
                    padding: 0,
                    margin: 0,
                    order: 3
                },
                _a[theme.breakpoints.down("sm")] = {
                    width: "100%",
                },
                _a["&.layout-3"] = {
                    "&:not(:first-child)": {
                        display: "none",
                    },
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                },
                _a["&.title,&.get-in-touch"] = (_b = {},
                    _b[theme.breakpoints.down("lg")] = {
                        width: "100%",
                        order: 1,
                    },
                    _b),
                _a["&.layout-4,&.layout-5"] = {
                    "&:nth-child(3)": {
                        "&.layout-5": {
                            display: "none",
                        },
                    },
                },
                _a[theme.breakpoints.down("lg")] = {
                    "&.layout-5": (_c = {
                            marginRight: theme.spacing(20)
                        },
                        _c[theme.breakpoints.down("sm")] = {
                            margin: 0,
                        },
                        _c),
                },
                _a);
        },
        footerListItem: {
            margin: theme.spacing(2, 0),
            maxWidth: 297,
            "&.layout-3": {
                margin: theme.spacing(1, "auto"),
                "&.caption": {
                    maxWidth: "100%",
                },
            },
        },
        footerListItemLink: function (props) {
            var _a;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                textDecoration: "none",
                fontSize: theme.typography.fontSize,
            });
        },
        footerLogoList: (_a = {},
            _a[theme.breakpoints.down("lg")] = {
                width: "100%",
                "& li": {
                    maxWidth: "100%",
                },
                order: 1,
            },
            _a),
        getInTouch: (_b = {},
            _b[theme.breakpoints.down("lg")] = {
                width: "100%",
                order: 1,
            },
            _b["&.layout-4"] = {
                margin: theme.spacing(2, 0),
            },
            _b),
        footerLogo: {
            display: "flex",
            gap: theme.spacing(2),
            alignItems: "center",
            flexWrap: "nowrap",
        },
        footerLogoImage: {
            height: 49,
            width: 49,
        },
        footerLogoText: function (props) {
            var _a;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                fontSize: theme.euDesign.typography.h4,
            });
        },
        footerListHeader: {
            fontWeight: theme.euDesign.typography.fontWeightSemiBold,
            fontSize: theme.euDesign.typography.overline,
        },
        socialMediaContainer: {
            display: "flex",
            gap: theme.spacing(3.5),
            alignItems: "center",
        },
        socialMediaIcon: {
            fontSize: theme.euDesign.typography.bodyLg,
        },
        divider: function (props) {
            var _a;
            return ({
                width: "100%",
                backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300],
                height: 1,
            });
        },
        copyright: function (props) {
            var _a, _b;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                fontSize: theme.euDesign.typography.caption,
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                marginTop: theme.spacing(2.5),
                "&.layout-3": {
                    textAlign: "center",
                },
            });
        },
        inputContainer: function () {
            var _a;
            return (_a = {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: theme.euDesign.colors.white,
                    borderRadius: theme.spacing(0.5),
                    border: "1px solid ".concat(theme.euDesign.colors.green_base)
                },
                _a[theme.breakpoints.down("lg")] = {
                    width: "85vw",
                    "&.layout-5": {
                        width: "65vw",
                    },
                },
                _a);
        },
        inputWrapper: {
            flexGrow: 1,
            marginRight: theme.spacing(2),
        },
        input: function (props) {
            var _a, _b;
            return ({
                fontSize: theme.euDesign.typography.bodySm,
                "&::placeholder": {
                    color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
                    fontSize: theme.euDesign.typography.bodySm,
                },
                padding: theme.spacing(2),
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                border: "none",
                outline: "none",
                width: "100%",
            });
        },
        subscribeList: {
            margin: theme.spacing(2, 0),
        },
        block3ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
