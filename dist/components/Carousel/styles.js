import { makeStyles } from "@mui/styles";
export var useCarouselStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        carouselContainer: {
            overflow: "hidden",
            margin: "auto",
        },
        carouselImage: (_a = {
                display: "grid",
                gridTemplateColumns: "1fr",
                "&.arrow": {
                    gridTemplateColumns: "4% 1fr 4%",
                }
            },
            _a[theme.breakpoints.down("sm")] = {
                gridTemplateColumns: "100%",
                justifyContent: "center",
            },
            _a),
        buttonArrow: (_b = {
                color: "white",
                padding: theme.spacing(1.875),
                borderRadius: "50%",
                backgroundImage: "url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowRight.svg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "&.prev": {
                    backgroundImage: "url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowLeft.svg')",
                }
            },
            _b[theme.breakpoints.down("md")] = {
                padding: theme.spacing(1.5),
            },
            _b),
        arrow: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            borderRadius: "50%",
        },
        carouselSlide: {
            width: "100%",
            display: "flex",
            overflow: "hidden",
            "&.carousel4": {
                width: "25px",
            },
        },
        carouselPrevious: (_c = {
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                zIndex: 3,
                "&.changeDirection": {
                    position: "absolute",
                    top: 0,
                }
            },
            _c[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _c),
        carouselRender: {
            display: "flex",
            overflow: "hidden",
            "&.changeDirection": {
                width: "100%",
            },
        },
        carouselNext: (_d = {
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                zIndex: 3
            },
            _d[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _d["&.changeDirection"] = {
                position: "absolute",
                top: 0,
                left: "15%",
            },
            _d),
        pointers: {
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            cursor: "pointer",
            paddingTop: theme.spacing(2.5),
        },
        pointerImg: {
            width: "13px",
            height: "13px",
        },
        pointerImgActive: {
            width: "13px",
            height: "13px",
        },
        arrowContainer: {
            display: "none",
            justifyContent: "space-between",
            width: "100px",
            "&.hasArrow": {
                display: "flex",
            },
        },
    });
});
