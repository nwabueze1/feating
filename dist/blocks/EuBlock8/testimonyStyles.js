import { makeStyles } from "@mui/styles";
export var useTestimonyStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        testimonyHeader: {
            display: "flex",
            justifyContent: "space-between",
        },
        titleContainer: {
            display: "flex",
            gap: theme.spacing(0.5),
            width: "100%",
        },
        titleHeading: (_a = {
                flex: 1,
                display: "flex",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.down(1030)] = {
                flexDirection: "column",
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                marginBottom: theme.spacing(1),
            },
            _a),
        avatarContainer: {
            height: 88.9,
            width: 88.9,
            overflow: "hidden",
            borderRadius: "100%",
        },
        avatar: {
            height: "100%",
            width: "100%",
        },
        testimonyContent: (_b = {
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                gap: theme.spacing(5),
                "&.layout-4, &.layout-5": {
                    marginTop: theme.spacing(2),
                },
                "&.layout-5": (_c = {
                        paddingBottom: theme.spacing(1)
                    },
                    _c[theme.breakpoints.down("sm")] = {
                        gap: theme.spacing(5),
                    },
                    _c),
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                "&.layout-2,&.layout-3": {
                    flexWrap: "wrap",
                    margin: 0,
                },
                "&.layout-3": {
                    justifyContent: "space-around",
                },
                scrollSnapType: "x mandatory"
            },
            _b[theme.breakpoints.down("xl")] = {
                gap: theme.spacing(2.5),
            },
            _b[theme.breakpoints.down("sm")] = {
                gap: theme.spacing(5),
            },
            _b),
        testimonyTitle: (_d = {
                fontSize: theme.euDesign.typography.h5,
                margin: theme.spacing(0, 0, 0.5, 0),
                whiteSpace: "nowrap"
            },
            _d[theme.breakpoints.down(1030)] = {
                fontSize: theme.euDesign.typography.h5 - 1,
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.euDesign.typography.h5 - 3,
            },
            _d),
        ratingContainer: {
            display: "flex",
            gap: theme.spacing(0.4),
        },
        buttonContainer: (_e = {
                display: "flex",
                justifyContent: "space-between"
            },
            _e[theme.breakpoints.down("md")] = {
                "&.layout-1": {
                    display: "none",
                },
            },
            _e),
        menuContent: {
            overflowX: "auto",
        },
        avatarCardContainer: (_f = {
                position: "absolute",
                zIndex: 100,
                top: "7%",
                right: "4%",
                "&.layout-2": {
                    right: "4%",
                }
            },
            _f[theme.breakpoints.only("xl")] = {
                right: "-3%",
                "&.layout-2": {
                    right: "0%",
                },
            },
            _f[theme.breakpoints.down(1030)] = {
                right: "12%",
                top: "22%",
            },
            _f[theme.breakpoints.down("lg")] = {
                right: "4%",
                top: "17%",
            },
            _f[theme.breakpoints.down("sm")] = {
                right: "4%",
                top: "12%",
            },
            _f["&.layout-3"] = (_g = {
                    right: "1%"
                },
                _g[theme.breakpoints.down(1030)] = {
                    right: "18%",
                },
                _g[theme.breakpoints.down("sm")] = {
                    right: "4%",
                    top: "15%",
                },
                _g),
            _f),
    });
});
