import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCardStyles } from "./styles";
import { BsChevronRight } from "react-icons/bs";
import clx from "classnames";
import { getCurrency, useRecordLinkClick, useBlockSelector, createResponsiveImage } from "../../helpers";
export var Card = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? "view" : _b, _c = _a.hasShadow, hasShadow = _c === void 0 ? false : _c, colors = _a.colors, image = _a.image, currency = _a.currency, subtitle = _a.subtitle, title = _a.title, action = _a.action, price = _a.price, imageHeight = _a.imageHeight, showShadow = _a.showShadow, numberOfLines = _a.numberOfLines, screenSize = _a.screenSize;
    var config = useBlockSelector(function (state) { return state; });
    var classes = useCardStyles({ hasShadow: hasShadow, colors: colors });
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function () {
        var _a, _b, _c;
        mode === "view" && recordLinkClick((_a = action === null || action === void 0 ? void 0 : action.title) !== null && _a !== void 0 ? _a : "", (_b = action === null || action === void 0 ? void 0 : action.href) !== null && _b !== void 0 ? _b : "", config.block_uuid);
        mode === "view" && ((_c = action === null || action === void 0 ? void 0 : action.onClick) === null || _c === void 0 ? void 0 : _c.call(action));
    };
    return (_jsxs("article", { className: clx(classes.card, showShadow ? "shadow" : ""), children: [_jsxs("div", { className: classes.card_image_container, style: { maxHeight: imageHeight }, children: [image &&
                        createResponsiveImage(image, {
                            screenSize: screenSize,
                            className: classes.card_image,
                            styles: {
                                img: {
                                    height: imageHeight,
                                },
                                picture: {
                                    height: "100%",
                                    width: "100%",
                                },
                            },
                        }), _jsx("div", { className: classes.overlay })] }), _jsxs("div", { children: [_jsx("h4", { className: classes.card_title, children: title }), _jsx("p", { className: classes.card_subtitle, style: {
                            WebkitLineClamp: numberOfLines,
                        }, children: subtitle }), _jsxs("div", { className: classes.cardPriceAndButton, children: [action && (_jsx(_Fragment, { children: (action === null || action === void 0 ? void 0 : action.title) &&
                                    (action.href && action.href.length > 0 ? (_jsxs("a", { className: classes.card_button, onClick: handleClick, href: mode === "view" ? action.href : undefined, children: [action.title, _jsx("span", { className: classes.card_button_icon, children: _jsx(BsChevronRight, {}) })] })) : (_jsxs("button", { className: classes.card_button, onClick: action.onClick, children: [action.title, _jsx("span", { className: classes.card_button_icon, children: _jsx(BsChevronRight, {}) })] }))) })), price && (_jsxs("h6", { className: classes.price, children: [_jsx("span", { className: classes.currency, children: getCurrency(currency !== null && currency !== void 0 ? currency : "") }), price] }))] })] })] }));
};
