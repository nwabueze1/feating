var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEuBlock3Styles } from "./styles";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelectedLayout } from "../../hooks";
import { EuBlock3Layout } from "./data/useBlock3Layout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration } from "../../helpers";
import { SocialMedia, FooterLink, FooterListItem, SubscribeInput } from "./components";
import { BlockProvider } from "../../BlockProvider";
import block3 from "../../mappings/block3";
var BLOCK_UUID = block3.uuid;
export var EuBlock3 = function (_a) {
    var _b, _c, _d, _e, _f;
    var content = _a.content, configuration = _a.configuration, _g = _a.mode, mode = _g === void 0 ? "view" : _g, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "configuration", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var customConfig = getConfiguration(configuration, "main", getMappedColor);
    var colors = getConfiguration(configuration, "button", getMappedColor).colors;
    var classes = useEuBlock3Styles(customConfig);
    var theme = useTheme();
    var md = useMediaQuery(theme.breakpoints.down("lg"));
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var layout = useSelectedLayout(props.layouts);
    var key = "blocks." + index;
    var renderNavList = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.footerLinks) === null || _a === void 0 ? void 0 : _a.map(function (footerListItem, index) { return (_jsxs("ul", { className: clx(classes.footerList, "links", layout), children: [_jsx(FooterListItem, { layout: classes.footerListHeader, children: footerListItem.name }), footerListItem.links.map(function (item, i) { return (_jsx(FooterListItem, { children: _jsx(FooterLink, { mode: mode, href: item.url, children: item.text }) }, i)); }), _jsx(FooterListItem, { children: layout === EuBlock3Layout.layout5 && sm && index === 1 && _jsx(SocialMedia, { mode: mode, social: content === null || content === void 0 ? void 0 : content.icons, layout: layout }) })] }, index)); });
    };
    return (_jsx(BlockProvider, { fonts: customConfig.fonts, colors: colors, block_uuid: BLOCK_UUID, children: _jsx("div", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block3ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("div", { className: classes.container, children: [_jsxs("article", { className: clx(classes.footerContainer, layout), children: [_jsxs("ul", { className: clx(classes.footerList, classes.footerLogoList, layout, "title"), children: [_jsx(FooterListItem, { layout: layout, children: _jsx(FooterLink, { mode: mode, children: _jsxs("span", { className: classes.footerLogo, children: [_jsx("img", { src: (_b = content === null || content === void 0 ? void 0 : content.image) === null || _b === void 0 ? void 0 : _b.src, className: classes.footerLogoImage }), _jsx("span", { className: classes.footerLogoText, children: (_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.main })] }) }) }), _jsx(FooterListItem, { layout: clx(layout, "caption"), children: (_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.caption }), _jsx(FooterListItem, { layout: layout, children: (layout === EuBlock3Layout.layout5 && sm) || layout === EuBlock3Layout.layout2 ? null : _jsx(SocialMedia, { social: content === null || content === void 0 ? void 0 : content.icons, layout: layout, mode: mode }) })] }), renderNavList(), layout === EuBlock3Layout.layout2 && md ? (_jsx("ul", { className: clx(classes.footerList, layout, "get-in-touch"), children: _jsx(SocialMedia, { showHeader: true, social: content === null || content === void 0 ? void 0 : content.icons, layout: layout, mode: mode }) })) : (_jsxs("ul", { className: clx(classes.footerList, layout, "get-in-touch"), children: [_jsx(FooterListItem, { layout: clx(classes.subscribeList, classes.getInTouch, layout), children: _jsx(FooterLink, { mode: mode, layout: classes.footerListHeader, children: (_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.contact }) }), _jsx(FooterListItem, { layout: classes.subscribeList, children: _jsx(FooterLink, { mode: mode, children: (_f = content === null || content === void 0 ? void 0 : content.text) === null || _f === void 0 ? void 0 : _f.subtitle }) }), _jsxs(FooterListItem, { layout: classes.subscribeList, children: [layout === EuBlock3Layout.layout2 && sm && _jsx(SocialMedia, { social: content === null || content === void 0 ? void 0 : content.icons, layout: layout, mode: mode }), _jsx(SubscribeInput, { layout: layout, content: content })] })] }))] }), _jsx("div", { className: classes.divider }), _jsx("div", { children: _jsxs("p", { className: clx(classes.copyright, layout), children: ["\u00A9 Eat-Up ", new Date().getFullYear(), ". Made with love by Fidelis Okeke"] }) })] }) }) }));
};
