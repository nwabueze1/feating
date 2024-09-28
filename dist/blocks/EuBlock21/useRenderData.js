import { jsx as _jsx } from "react/jsx-runtime";
import { Card as MenuItemCard } from "../../components";
import { Card } from "../EuBlock15";
import { CardSkeleton } from "./CardSkeleton";
import clx from "classnames";
export var useRenderData = function (mode, classes) {
    var renderMenuItems = function (menuItems, colors) {
        return menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, index) {
            var _a, _b, _c, _d, _e;
            return (_jsx(MenuItemCard, { title: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name, subtitle: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description, price: menuItem === null || menuItem === void 0 ? void 0 : menuItem.price, mode: mode, currency: (_d = (_c = (_b = (_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", image: menuItem.image, colors: colors, hasShadow: true, action: {
                    href: (_e = menuItem === null || menuItem === void 0 ? void 0 : menuItem.slug) !== null && _e !== void 0 ? _e : "",
                    title: "View",
                } }, index));
        });
    };
    var renderPosts = function (blogPosts) {
        return blogPosts.map(function (post, index) {
            var _a, _b, _c, _d, _e, _f;
            return (_jsx(Card, { title: ((_a = post === null || post === void 0 ? void 0 : post.title) === null || _a === void 0 ? void 0 : _a.length) > 35 ? ((_b = post === null || post === void 0 ? void 0 : post.title) === null || _b === void 0 ? void 0 : _b.slice(0, 32)) + "..." : post === null || post === void 0 ? void 0 : post.title, overline: (_c = post === null || post === void 0 ? void 0 : post.category_name) !== null && _c !== void 0 ? _c : "ajajaj", excerpt: (post === null || post === void 0 ? void 0 : post.excerpt.length) > 70 ? (post === null || post === void 0 ? void 0 : post.excerpt.slice(0, 67)) + "..." : (_d = post === null || post === void 0 ? void 0 : post.excerpt) !== null && _d !== void 0 ? _d : "", featured_image: (_e = post === null || post === void 0 ? void 0 : post.featured_image) === null || _e === void 0 ? void 0 : _e.src, mode: mode, layout: "layout-2", slug: (_f = post.slug) !== null && _f !== void 0 ? _f : "", published_at: post === null || post === void 0 ? void 0 : post.published_at }, index));
        });
    };
    var renderImageSkeleton = function () { return (_jsx("div", { className: classes.cardContainer, children: Array(8)
            .fill(0)
            .map(function (_, index) { return (_jsx(CardSkeleton, {}, index)); }) })); };
    var renderTags = function (_a) {
        var activeTag = _a.activeTag, tags = _a.tags, setActiveTag = _a.setActiveTag;
        return tags.map(function (tag, index) { return (_jsx("p", { className: clx(classes.tag, activeTag === tag && "active"), onClick: function () { return setActiveTag(tag); }, children: tag }, index)); });
    };
    return {
        renderPosts: renderPosts,
        renderMenuItems: renderMenuItems,
        renderImageSkeleton: renderImageSkeleton,
        renderTags: renderTags,
    };
};
