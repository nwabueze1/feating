import { makeStyles } from "@mui/styles";
export var useCommentStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        testament: function (props) {
            var _a;
            var _b;
            return (_a = {
                    width: "48%",
                    minWidth: "48%",
                    minHeight: "100%",
                    "&.layout-5": {
                        border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[1100]),
                        padding: theme.spacing(1.5),
                        borderRadius: theme.spacing(1.5),
                        minWidth: "48%",
                        width: "48%",
                    }
                },
                _a[theme.breakpoints.down("xl")] = {
                    minWidth: "45%",
                },
                _a[theme.breakpoints.down(1030)] = {
                    minWidth: "65%",
                },
                _a[theme.breakpoints.down("sm")] = {
                    minWidth: "100% !important",
                },
                _a);
        },
        testamentItem: {
            width: "100%",
            minWidth: "100%",
        },
        testimonySub: function (props) {
            var _a;
            return ({
                fontSize: theme.euDesign.typography.bodyMin,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
                margin: theme.spacing(0.5, 0),
            });
        },
        testimony: function (props) {
            var _a;
            return ({
                fontSize: theme.euDesign.typography.bodySm,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
                margin: 0,
                marginTop: theme.spacing(3),
            });
        },
        rating: function (props) {
            var _a;
            return ({
                fill: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[800],
                fontSize: theme.typography.fontSize + 3,
            });
        },
        ratingContainer: {
            display: "flex",
            gap: theme.spacing(0.4),
        },
        testimonyHeader: {
            display: "flex",
            justifyContent: "space-between",
        },
        titleContainer: {
            display: "flex",
            gap: theme.spacing(1),
            width: "100%",
            alignItems: "center",
        },
        avatarContainer: {
            height: 70,
            width: 70,
            overflow: "hidden",
            borderRadius: "100%",
        },
        avatar: {
            height: 70,
            width: 70,
        },
        titleHeading: (_a = {
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                "&.layout-2,&.layout-3,&.layout-4, &.layout-5": {
                    flexDirection: "column",
                }
            },
            _a[theme.breakpoints.down(1030)] = {
                flexDirection: "column",
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                marginBottom: theme.spacing(1),
            },
            _a),
        testimonyTitle: (_b = {
                fontSize: theme.euDesign.typography.h5,
                margin: 0,
                whiteSpace: "nowrap"
            },
            _b[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.h5 - 1,
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5 - 3,
            },
            _b),
    });
});
