import { makeStyles } from "@mui/styles";
export var useAvatarCardStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        container: function (props) {
            var _a, _b;
            var _c;
            return (_a = {
                    padding: theme.spacing(2),
                    backgroundColor: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[700],
                    boxShadow: "0px 4px 100px ".concat(theme.euDesign.getShadow(0.1)),
                    borderRadius: 12,
                    width: 230,
                    "&.layout-3": (_b = {
                            width: "unset",
                            padding: theme.spacing(2.4)
                        },
                        _b[theme.breakpoints.down("sm")] = {
                            padding: theme.spacing(1),
                        },
                        _b)
                },
                _a[theme.breakpoints.down("xl")] = {
                    "&.layout-3": {
                        width: "unset",
                        padding: theme.spacing(1),
                    },
                },
                _a[theme.breakpoints.down("sm")] = {
                    padding: theme.spacing(1),
                    width: "unset",
                },
                _a);
        },
        avatarTitle: (_a = {
                fontSize: theme.euDesign.typography.h5 - 4,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                margin: theme.spacing(0),
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[1300]; }
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize - 2,
            },
            _a),
        secondaryText: (_b = {
                fontSize: theme.typography.fontSize - 3
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize - 8,
            },
            _b),
        avatarContainer: {
            display: "flex",
        },
        avatar: (_c = {
                height: 50,
                width: 50,
                borderRadius: "100%",
                position: "relative",
                overflow: "hidden",
                "&.layout-3": {
                    height: 40,
                    width: 40,
                },
                "&.background": {
                    backgroundColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[1200]; },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
                    fontSize: theme.euDesign.typography.bodySm - 2,
                    fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                    margin: 0,
                }
            },
            _c[theme.breakpoints.down("sm")] = {
                height: 22,
                width: 22,
                "&.layout-3": {
                    width: 22,
                    height: 22,
                },
            },
            _c),
        avatarImage: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
    });
});
