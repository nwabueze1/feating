var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { useEffect } from "react";
import { useEuBlock17Styles } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration, useRecordPostView } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { RelatedPostThumbnail } from "./components/RelatedPost";
import block19 from "../../mappings/block19";
import { useCalculateMinutesRead } from './hooks';
var BLOCK_UUID = block19.uuid;
export var EuBlock19 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    var content = _a.content, _2 = _a.mode, mode = _2 === void 0 ? "view" : _2, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var layout = useSelectedLayout(props.layouts);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
    var buttonConfiguration = getConfiguration(props.configuration, "button", getMappedColor);
    var classes = useEuBlock17Styles(blockConfiguration);
    var key = "blocks." + String(index);
    var featured_image = (_b = content === null || content === void 0 ? void 0 : content.post) === null || _b === void 0 ? void 0 : _b.featured_image;
    var featured_image_source = ((_c = featured_image === null || featured_image === void 0 ? void 0 : featured_image.source) === null || _c === void 0 ? void 0 : _c.includes("unsplash")) ? "Unsplash" : "Pexels";
    var recordPostView = useRecordPostView();
    var calculateMinutesRead = useCalculateMinutesRead();
    useEffect(function () {
        var _a;
        recordPostView((_a = content === null || content === void 0 ? void 0 : content.post) === null || _a === void 0 ? void 0 : _a.uuid);
    }, []);
    var formatDate = function (dateString) {
        var date = new Date(dateString).toDateString();
        var time = formatTime(dateString);
        var dateArr = date.split(" ");
        dateArr.shift();
        dateArr[1] = dateArr[1] + ",";
        return "".concat(dateArr.join(" "), "; ").concat(time);
    };
    var formatTime = function (dateString) {
        var time = new Date(dateString);
        var hour = time.getHours();
        var minute = time.getMinutes();
        var temp = String(hour % 12);
        if (temp === "0") {
            temp = "12";
        }
        temp += (minute < 10 ? ":0" : ":") + minute;
        temp += hour >= 12 ? "pm" : "am";
        return temp;
    };
    return (_jsx(BlockProvider, __assign({}, blockConfiguration, { block_uuid: BLOCK_UUID, children: _jsxs("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block19ActiveElement), onClick: function () {
                mode && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: [_jsxs("div", { className: clx(classes.categoryContainer, layout), children: [_jsxs("div", { className: classes.leftSection, children: [_jsxs("div", { className: classes.categoryContainer, children: [_jsx("h5", { className: classes.category, children: (_d = content === null || content === void 0 ? void 0 : content.post) === null || _d === void 0 ? void 0 : _d.category_name }), _jsx("span", { className: classes.dash }), _jsx("span", { className: classes.readTime, children: calculateMinutesRead((_e = content === null || content === void 0 ? void 0 : content.post) === null || _e === void 0 ? void 0 : _e.content) })] }), _jsx("h1", { className: classes.title, children: (_f = content === null || content === void 0 ? void 0 : content.post) === null || _f === void 0 ? void 0 : _f.title }), _jsx("hr", { className: classes.horizontalLine }), _jsxs("div", { className: classes.authorContainer, children: [_jsx("div", { className: classes.authorImageContainer, children: _jsx("img", { src: (_j = (_h = (_g = content === null || content === void 0 ? void 0 : content.post) === null || _g === void 0 ? void 0 : _g.author) === null || _h === void 0 ? void 0 : _h.avatar) === null || _j === void 0 ? void 0 : _j.src, className: classes.authorImage }) }), _jsx("div", { className: classes.authorItem, children: _jsxs("div", { children: [_jsx("p", { className: classes.authorTitle, children: "Written by" }), _jsx("p", { className: classes.authorContent, children: (_l = (_k = content === null || content === void 0 ? void 0 : content.post) === null || _k === void 0 ? void 0 : _k.author) === null || _l === void 0 ? void 0 : _l.name })] }) }), _jsx("div", { className: classes.authorItem, children: _jsxs("div", { children: [_jsx("p", { className: classes.authorTitle, children: "Published on" }), _jsx("p", { className: classes.authorContent, children: formatDate((_m = content === null || content === void 0 ? void 0 : content.post) === null || _m === void 0 ? void 0 : _m.published_at) })] }) })] })] }), _jsx("span", {})] }), _jsxs("div", { className: clx(classes.container, layout), children: [_jsxs("div", { className: classes.leftSection, children: [_jsxs("div", { className: clx(classes.innerHeader, layout), children: [_jsxs("div", { className: classes.categoryContainer, children: [_jsx("h5", { className: classes.category, children: (_o = content === null || content === void 0 ? void 0 : content.post) === null || _o === void 0 ? void 0 : _o.category_name }), _jsx("span", { className: classes.dash }), _jsx("span", { className: classes.readTime, children: calculateMinutesRead((_p = content === null || content === void 0 ? void 0 : content.post) === null || _p === void 0 ? void 0 : _p.content) })] }), _jsx("h1", { className: classes.title, children: (_q = content === null || content === void 0 ? void 0 : content.post) === null || _q === void 0 ? void 0 : _q.title }), _jsx("hr", { className: classes.horizontalLine }), _jsxs("div", { className: classes.authorContainer, children: [_jsx("div", { className: classes.authorImageContainer, children: _jsx("img", { src: (_t = (_s = (_r = content === null || content === void 0 ? void 0 : content.post) === null || _r === void 0 ? void 0 : _r.author) === null || _s === void 0 ? void 0 : _s.avatar) === null || _t === void 0 ? void 0 : _t.src, className: classes.authorImage }) }), _jsx("div", { className: classes.authorItem, children: _jsxs("div", { children: [_jsx("p", { className: classes.authorTitle, children: "Written by" }), _jsx("p", { className: classes.authorContent, children: (_v = (_u = content === null || content === void 0 ? void 0 : content.post) === null || _u === void 0 ? void 0 : _u.author) === null || _v === void 0 ? void 0 : _v.name })] }) }), _jsx("div", { className: classes.authorItem, children: _jsxs("div", { children: [_jsx("p", { className: classes.authorTitle, children: "Published on" }), _jsx("p", { className: classes.authorContent, children: formatDate((_w = content === null || content === void 0 ? void 0 : content.post) === null || _w === void 0 ? void 0 : _w.published_at) })] }) })] })] }), _jsxs("div", { className: classes.headerImageContainer, children: [_jsx("div", { style: { backgroundImage: "url('".concat(featured_image === null || featured_image === void 0 ? void 0 : featured_image.src, "')") }, className: classes.headerImage }), (featured_image === null || featured_image === void 0 ? void 0 : featured_image.photographer) && (featured_image === null || featured_image === void 0 ? void 0 : featured_image.source) && (_jsx("p", { className: classes.featuredImageAttribution, children: _jsxs("em", { children: ["Photo by", " ", _jsx("a", { href: (_x = featured_image === null || featured_image === void 0 ? void 0 : featured_image.photographer) === null || _x === void 0 ? void 0 : _x.url, target: "_blank", children: (_y = featured_image === null || featured_image === void 0 ? void 0 : featured_image.photographer) === null || _y === void 0 ? void 0 : _y.name }), " ", "on", " ", _jsx("a", { href: featured_image === null || featured_image === void 0 ? void 0 : featured_image.source, target: "_blank", children: featured_image_source })] }) }))] }), _jsx("div", { className: classes.loadContent, dangerouslySetInnerHTML: { __html: (_z = content === null || content === void 0 ? void 0 : content.post) === null || _z === void 0 ? void 0 : _z.content } })] }), _jsx("div", { className: clx(classes.rightSection, layout), children: _jsx(RelatedPostThumbnail, { mode: mode, header: "Related Articles", content: (_1 = (_0 = content === null || content === void 0 ? void 0 : content.post) === null || _0 === void 0 ? void 0 : _0.related_posts) !== null && _1 !== void 0 ? _1 : [], layout: layout, buttonConfiguration: buttonConfiguration }) })] })] }) })));
};
