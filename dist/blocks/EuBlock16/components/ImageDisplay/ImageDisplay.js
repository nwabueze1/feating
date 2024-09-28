import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useImageDisplayStyles } from "./";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
export var ImageDisplay = function (_a) {
    var image = _a.image, layout = _a.layout;
    var classes = useImageDisplayStyles({ image: image, layout: layout });
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down("lg"));
    var showOuterImageForLayout4 = layout === "layout-4" && lg;
    var defaultLayout = !["layout-3", "layout-4", "layout-5"].includes(layout);
    if (!image)
        return null;
    if (defaultLayout)
        return (_jsxs("div", { className: classes.root, children: [_jsx("div", { className: classes.background1 }), _jsx("div", { className: clx(classes.background1, "image-2") })] }));
    return layout === "layout-5" ? (_jsx("div", { className: classes.background3 })) : (_jsxs("div", { className: classes.background2, children: [_jsx("div", { className: clx(classes.item, layout) }), _jsx("div", { className: clx(classes.item, layout, "innerImage"), style: {
                    background: showOuterImageForLayout4 ? "url('".concat(image === null || image === void 0 ? void 0 : image.src, "')") : "",
                }, children: showOuterImageForLayout4 ? null : (_jsx("div", { className: clx(classes.innerImage, layout), style: {
                        background: "url('".concat(image === null || image === void 0 ? void 0 : image.src, "')"),
                    } })) }), _jsx("div", { className: clx(classes.item, layout), style: { background: "url('".concat(image === null || image === void 0 ? void 0 : image.src, "')") } })] }));
};
