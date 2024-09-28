import { makeStyles } from "@mui/styles";
export var useModalStyles = makeStyles(function (theme) {
    var _a;
    return ({
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "fixed",
            "&.TopCenter": {
                alignItems: "flex-start",
            },
        },
        modal: (_a = {
                width: "70%"
            },
            _a[theme.breakpoints.up(1240)] = {
                width: "60%",
            },
            _a[theme.breakpoints.down("md")] = {
                width: "70%",
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "85%",
            },
            _a.zIndex = 6,
            _a.overflow = "hidden",
            _a["&.TopCenter"] = {
                paddingTop: theme.spacing(5),
            },
            _a),
        modalContent: function (props) {
            var _a;
            return ({
                backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
                borderRadius: "4px",
                boxShadow: theme.euDesign.shadows[7],
                width: "100%",
            });
        },
        closeButton: function (props) {
            var _a;
            var _b;
            return (_a = {
                    backgroundColor: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                    border: "none",
                    padding: theme.spacing(1, 2),
                    cursor: "pointer",
                    position: "absolute",
                    right: "-24px",
                    top: "-16px"
                },
                _a[theme.breakpoints.down("sm")] = {
                    right: "-15px",
                    top: "-13px",
                    padding: theme.spacing(0.5, 0.7),
                },
                _a);
        },
        modalOverlay: {
            width: "100%",
            height: "100%",
            position: "fixed",
            backgroundColor: theme.euDesign.getShadow(0.6),
            zIndex: 5,
        },
    });
});
