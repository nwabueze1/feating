import { makeStyles } from "@mui/styles";
export var useNavLogoStyles = makeStyles(function (theme) { return ({
    navLogo: function (props) {
        var _a;
        var _b;
        return (_a = {
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1),
                fontSize: theme.euDesign.typography.h5,
                fontWeight: theme.euDesign.typography.fontWeightSemiBold,
                textDecoration: "none",
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                order: 1,
                "& h4": {
                    margin: 0,
                },
                "&.layout-5": {
                    order: 2,
                    flex: 1,
                    justifyContent: "center",
                }
            },
            _a[theme.breakpoints.down(1200)] = {
                "&.layout-5": {
                    justifyContent: "flex-start",
                },
            },
            _a[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 4,
                width: "48%",
                "&.layout-3": {
                    width: "unset",
                    flex: "0 !important",
                },
                "&.layout-3,&.layout-2": {
                    flex: 1,
                },
            },
            _a);
    },
    navLogoText: function (props) {
        var _a;
        var _b;
        return (_a = {
                margin: 0,
                whiteSpace: "nowrap",
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading
            },
            _a[theme.breakpoints.down("md")] = {
                display: "none",
                "&.layout-2,&.layout-3,&.layout-4,&.layout-5": {
                    display: "unset",
                },
            },
            _a);
    },
    navLogoImage: {
        width: 48,
        height: 48,
    },
}); });
