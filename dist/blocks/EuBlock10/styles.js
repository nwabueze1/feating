import { makeStyles } from "@mui/styles";
export var useEuBlock10Styles = makeStyles(function (theme) {
    var _a;
    return ({
        base: {
            position: "relative",
        },
        root: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                boxShadow: "0px 1px 2px ".concat(theme.euDesign.getShadow(0.1)),
                padding: theme.spacing(2, 0),
                zIndex: 9999,
                overflowX: "hidden",
            });
        },
        block: {
            position: "relative",
        },
        container: {
            maxWidth: theme.euStyles.maxWidth,
            width: "85%",
            margin: "0 auto",
            position: "relative",
        },
        navBar: function (props) {
            var _a;
            var _b;
            return (_a = {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                    gap: theme.spacing(3)
                },
                _a[theme.breakpoints.down("xl")] = {
                    gap: theme.spacing(2),
                },
                _a[theme.breakpoints.down("lg")] = {
                    "&.layout-2": {
                        gap: theme.spacing(2),
                    },
                },
                _a[theme.breakpoints.down("md")] = {
                    gap: theme.spacing(1.2),
                    flexWrap: "wrap",
                    "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                        flexWrap: "nowrap",
                    },
                    "&.layout-3,&.layout-2": {
                        justifyContent: "unset",
                        "&::first-child": {
                            flex: 1,
                        },
                    },
                    "&.layout-2,&.layout-5,&.layout-4": {
                        gap: 0,
                    },
                },
                _a);
        },
        navList: (_a = {
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                gap: theme.spacing(3),
                justifyContent: "flex-end",
                marginLeft: "auto",
                "&.layout-2": {
                    order: 1,
                    flex: 1,
                    justifyContent: "flex-end",
                    marginLeft: "unset",
                },
                "&.layout-3": {
                    marginLeft: "unset",
                    order: 2,
                },
                "&.layout-4": {
                    marginLeft: "unset",
                    order: 1,
                },
                "&.layout-5": {
                    order: 1,
                    marginLeft: "unset",
                    padding: 0,
                },
                order: 3
            },
            _a[theme.breakpoints.down(1200)] = {
                display: "none",
            },
            _a),
        block10ActiveElement: {
            border: "1px dashed",
            borderColor: theme.euDesign.colors.green_primary,
        },
    });
});
