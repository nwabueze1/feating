import { makeStyles } from "@mui/styles";
export var useItemStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        menuBlock: (_a = {
                display: "flex",
                gap: theme.spacing(3),
                marginTop: theme.spacing(3),
                "&.layout-3": {
                    gap: 0,
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                gap: theme.spacing(3),
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
                marginTop: theme.spacing(1),
            },
            _a),
        menuContent: {
            overflowX: "auto",
            width: "100%",
        },
        cardContent: (_b = {
                width: "25%",
                minWidth: "25%",
                "&.layout-2": (_c = {
                        minWidth: "23%",
                        width: "23%"
                    },
                    _c[theme.breakpoints.only("xl")] = {
                        minWidth: "32%",
                    },
                    _c),
                "&.layout-3": {
                    minWidth: "24%",
                    width: "24%",
                }
            },
            _b[theme.breakpoints.up(1560)] = {
                minWidth: "30%",
            },
            _b[theme.breakpoints.only("xl")] = {
                minWidth: "32%",
            },
            _b[theme.breakpoints.down("xl")] = {
                minWidth: "50%",
                width: "50%",
                "&.layout-2": {
                    minWidth: "46%",
                },
                "&.layout-3": {
                    minWidth: "32%",
                },
            },
            _b[theme.breakpoints.down("lg")] = {
                minWidth: "70%",
                width: "70%",
                "&.layout-2": {
                    minWidth: "80%",
                },
                "&.layout-3": {
                    minWidth: "48%",
                },
            },
            _b[theme.breakpoints.down("md")] = {
                minWidth: "70%",
                width: "70%",
                "&.layout-2,&.layout-3": {
                    minWidth: "100%",
                    width: "100%",
                },
            },
            _b[theme.breakpoints.down("sm")] = {
                minWidth: "90%",
                width: "90%",
                "&.layout-2,&.layout-3": {
                    minWidth: "100%",
                    width: "100%",
                },
            },
            _b),
        cardContainer: (_d = {
                display: "flex",
                flexDirection: "row",
                overflowX: "auto",
                touchAction: "pan-y",
                scrollBehavior: "smooth",
                gap: theme.spacing(2),
                padding: theme.spacing(1),
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                "&.layout-2,&.layout-3": (_e = {
                        flexWrap: "wrap",
                        margin: 0
                    },
                    _e[theme.breakpoints.up("xl")] = {
                        justifyContent: "flex-start",
                    },
                    _e),
                "&.layout-3": (_f = {
                        justifyContent: "space-around"
                    },
                    _f[theme.breakpoints.only("xl")] = {
                        gap: theme.spacing(1.2),
                    },
                    _f)
            },
            _d[theme.breakpoints.down("md")] = {
                "&.layout-2, &.layout-3": {
                    justifyContent: "center",
                },
            },
            _d),
        buttonContainer: (_g = {
                display: "flex",
                gap: theme.spacing(2)
            },
            _g[theme.breakpoints.down("md")] = {
                "&.layout-1": {
                    display: "none",
                },
            },
            _g),
        sectionList: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    });
});
