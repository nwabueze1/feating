import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCardStyles } from ".";
import clx from "classnames";
import { useBlockSelector, createResponsiveImage } from "../../../../helpers";
import { getDateDuration } from "../../../../helpers/util";
import { Button } from "../../../../components";
export var Card = function (_a) {
    var excerpt = _a.excerpt, featured_image = _a.featured_image, category_name = _a.category_name, screenSize = _a.screenSize, action = _a.action, layout = _a.layout, title = _a.title, published_at = _a.published_at, slug = _a.slug, mode = _a.mode;
    var configuration = useBlockSelector(function (store) { return store; });
    var classes = useCardStyles(configuration);
    var variant = !layout || layout == "layout-1" || layout === "layout-2" ? "default" : "contained";
    return (_jsxs("article", { className: clx(classes.root, variant), children: [_jsxs("div", { className: classes.imageContainer, children: [createResponsiveImage(featured_image, {
                        className: classes.image,
                        screenSize: screenSize,
                        classNames: {
                            picture: classes.imageContainer,
                        },
                    }), _jsx("div", { className: classes.overlay })] }), _jsxs("header", { className: classes.header, children: [_jsx("p", { className: classes.overline, children: category_name }), _jsx("div", { className: classes.lineSeparator }), _jsx("p", { className: classes.timer, children: "5 mins read" })] }), _jsx("div", { className: classes.topic, children: title }), _jsx("div", { className: clx(classes.title, variant), dangerouslySetInnerHTML: { __html: excerpt } }), _jsx(Button, { mode: mode, variant: "outlined", size: "medium", href: "".concat(slug), children: action.title }), _jsx("div", { className: classes.separator }), _jsxs("p", { className: classes.datePosted, children: ["Posted ", getDateDuration(published_at)] })] }));
};
