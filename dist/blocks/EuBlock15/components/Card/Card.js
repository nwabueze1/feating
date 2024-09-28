import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCardStyles } from ".";
import clx from "classnames";
import { useBlockSelector } from "../../../../helpers";
import { getDateDuration } from "../../../../helpers/util";
export var Card = function (_a) {
    var excerpt = _a.excerpt, featured_image = _a.featured_image, title = _a.title, cta = _a.cta, layout = _a.layout, published_at = _a.published_at, mode = _a.mode, slug = _a.slug;
    var configuration = useBlockSelector(function (store) { return store; });
    var classes = useCardStyles(configuration);
    var variant = !layout || layout == "layout-1" || layout === "layout-2" ? "default" : "contained";
    return (_jsx("a", { href: mode === "view" ? slug : undefined, className: classes.anchorTag, style: { textDecoration: "none" }, children: _jsxs("article", { className: clx(classes.root, variant), children: [_jsxs("div", { className: classes.imageContainer, children: [_jsx("img", { src: featured_image, alt: "Feature Image", className: classes.image }), variant === "contained" && _jsx("div", { className: classes.overlay })] }), _jsx("header", { className: classes.header, children: _jsx("p", { className: classes.overline, children: title }) }), _jsx("div", { className: clx(classes.title, variant), dangerouslySetInnerHTML: { __html: excerpt } }), variant === "contained" && (_jsxs(_Fragment, { children: [cta && cta, _jsx("div", { className: classes.separator }), _jsx("p", { className: classes.datePosted, children: getDateDuration(published_at) })] }))] }) }));
};
