import { makeStyles } from "@mui/styles";
export var useLayoutStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        block: {
            marginTop: theme.spacing(4),
            justifyContent: "start",
            gap: "5%",
            "&.layout-5": (_a = {
                    flexDirection: "row",
                    alignItems: "start"
                },
                _a[theme.breakpoints.down("sm")] = {
                    flexDirection: "column",
                },
                _a),
        },
        textContainer: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: theme.spacing(1),
            "&.layout-4": (_b = {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    textAlign: "start",
                    marginBottom: theme.spacing(3)
                },
                _b[theme.breakpoints.down("sm")] = {
                    flexDirection: "column",
                    marginBottom: theme.spacing(1),
                },
                _b),
            "&.layout-5": (_c = {},
                _c[theme.breakpoints.down("sm")] = {
                    marginBottom: theme.spacing(2),
                },
                _c),
        },
        blockOverline: {
            "&.layout-4, &.layout-5": {
                textAlign: "start",
            },
        },
        ratingContainer: {
            margin: "0 auto",
            "&.layout-4": (_d = {
                    margin: 0,
                    marginLeft: "auto"
                },
                _d[theme.breakpoints.down("sm")] = {
                    margin: 0,
                },
                _d),
            "&.layout-5": {
                margin: 0,
            },
        },
        header: function (props) {
            var _a;
            return ({
                display: "flex",
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                "&.layout-3": {
                    justifyContent: "center",
                },
                "&.layout-4,&.layout-5": {
                    justifyContent: "start",
                },
            });
        },
        blockHeading: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(0.5),
            width: "100%",
        },
        heading: {
            "&.layout-5": {
                textAlign: "start",
            },
        },
        blockAction: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(0.5),
            width: "100%",
            "&.layout-4": {
                justifyContent: "center",
                alignItems: "end",
            },
            "&.layout-5": {
                alignItems: "start",
            },
        },
        blockSub: function (props) {
            var _a;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                "&.layout-4,&.layout-5": {
                    margin: 0,
                    width: "100%",
                    maxWidth: "100%",
                },
                "&.layout-5": {
                    textAlign: "start",
                },
            });
        },
        price: function (props) {
            var _a;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            });
        },
        image: {
            width: "100%",
            height: "500px",
            objectFit: "cover",
            "&.layout-5": (_e = {
                    width: "48%",
                    objectFit: "cover",
                    height: 430
                },
                _e[theme.breakpoints.down(1030)] = {
                    height: "60%",
                },
                _e[theme.breakpoints.down("sm")] = {
                    width: "100%",
                },
                _e),
        },
    });
});
