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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components";
import { useEuBlock13Styles, SearchBar, Card } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { MenuList } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { mapPostCategory } from ".";
import { useMediaQuery, useTheme } from "@mui/material";
import { useGetBlogPosts, useGetCategoryPosts } from "./hooks";
import block20 from "../../mappings/block20";
var BLOCK_UUID = block20.uuid;
export var EuBlock20 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var content = _a.content, _q = _a.mode, mode = _q === void 0 ? "view" : _q, props = __rest(_a, ["content", "mode"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
    var menuConfig = getConfiguration(props.configuration, "menu", getMappedColor);
    var buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
    var blog = useSelector(function (store) { return store; }).blog;
    var dispatch = useDispatch();
    var classes = useEuBlock13Styles(blockConfig);
    var layout = useSelectedLayout(props.layouts);
    var posts = blog === null || blog === void 0 ? void 0 : blog.posts;
    var _r = __read(useState((_d = (_c = (_b = blog === null || blog === void 0 ? void 0 : blog.categories) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.uuid) !== null && _d !== void 0 ? _d : ""), 2), activeCategoryUuid = _r[0], setActiveCategoryUuid = _r[1];
    var _s = __read(useState(""), 2), searchValue = _s[0], setSearchValue = _s[1];
    var _t = __read(useState(false), 2), loading = _t[0], setLoading = _t[1];
    var theme = useTheme();
    var lgScreens = useMediaQuery(theme.breakpoints.down("lg"));
    var layout2or3or4 = ["layout-2", "layout-3", "layout-4"];
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var getBlogPosts = useGetBlogPosts();
    var getCategoryPosts = useGetCategoryPosts();
    var blog_uuid = useMemo(function () {
        var _a, _b;
        if (!(blog === null || blog === void 0 ? void 0 : blog.posts) || ((_a = blog === null || blog === void 0 ? void 0 : blog.posts) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return undefined;
        return (_b = JSON.parse(JSON.stringify(blog === null || blog === void 0 ? void 0 : blog.posts))[0]) === null || _b === void 0 ? void 0 : _b.blog_uuid;
    }, []);
    var isLoadMore = ((_f = (_e = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _e === void 0 ? void 0 : _e.currentPage) !== null && _f !== void 0 ? _f : 0) < ((_h = (_g = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _g === void 0 ? void 0 : _g.lastPage) !== null && _h !== void 0 ? _h : 0);
    var isPosts = (blog === null || blog === void 0 ? void 0 : blog.posts) && ((_j = blog === null || blog === void 0 ? void 0 : blog.posts) === null || _j === void 0 ? void 0 : _j.length) > 0;
    var render = function (showMobile) {
        var _a;
        return (_jsx(BlockProvider, { fonts: menuConfig.fonts, colors: menuConfig.colors, children: _jsx(MenuList, { noScroll: true, gap: sm ? "1px" : undefined, onSelectMenu: function (item) { return fetchPosts(item.uuid); }, data: mapPostCategory(__spreadArray([{ name: "All Posts", uuid: "all" }], __read(((_a = blog === null || blog === void 0 ? void 0 : blog.categories) !== null && _a !== void 0 ? _a : [])), false)), showMobile: showMobile }) }));
    };
    var fetchPosts = function (category_uuid_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([category_uuid_1], __read(args_1), false), void 0, function (category_uuid, isLoadMore) {
            var paginatorInfo, response, _a, posts_1, paginatorInfo_1, updatedPosts;
            var _b;
            if (isLoadMore === void 0) { isLoadMore = false; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setActiveCategoryUuid(category_uuid);
                        setLoading(true);
                        paginatorInfo = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo;
                        if (!((category_uuid === null || category_uuid === void 0 ? void 0 : category_uuid.toLowerCase()) === "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, getBlogPosts(blog_uuid, isLoadMore ? (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage) + 1 : 1)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, getCategoryPosts(category_uuid, isLoadMore ? (paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.currentPage) + 1 : 1)];
                    case 3:
                        _a = _c.sent();
                        _c.label = 4;
                    case 4:
                        response = _a;
                        if (response) {
                            posts_1 = response.posts, paginatorInfo_1 = response.paginatorInfo;
                            updatedPosts = isLoadMore ? __spreadArray(__spreadArray([], __read(((_b = blog === null || blog === void 0 ? void 0 : blog.posts) !== null && _b !== void 0 ? _b : [])), false), __read(posts_1), false) : posts_1;
                            dispatch({ type: "GET_POSTS", payload: updatedPosts });
                            dispatch({ type: "SET_BLOG_PAGINATION", payload: paginatorInfo_1 });
                        }
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    var handleSearchChange = function (event) {
        setSearchValue(event.target.value);
    };
    var renderPosts = function () {
        var renderedPosts = searchValue ? posts === null || posts === void 0 ? void 0 : posts.filter(function (post) { var _a, _b; return (_b = (_a = post === null || post === void 0 ? void 0 : post.title) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(searchValue.toLowerCase()); }) : posts;
        if (!searchValue)
            return renderedPosts === null || renderedPosts === void 0 ? void 0 : renderedPosts.map(function (value, index) {
                var _a, _b;
                return (_jsx(Card, { title: ((_a = value === null || value === void 0 ? void 0 : value.title) === null || _a === void 0 ? void 0 : _a.length) > 35 ? ((_b = value === null || value === void 0 ? void 0 : value.title) === null || _b === void 0 ? void 0 : _b.slice(0, 32)) + "..." : value === null || value === void 0 ? void 0 : value.title, category_name: value === null || value === void 0 ? void 0 : value.category_name, featured_image: value.featured_image, excerpt: value.excerpt.length > 70 ? value.excerpt.slice(0, 67) + "..." : value.excerpt, mode: mode, slug: value === null || value === void 0 ? void 0 : value.slug, action: {
                        title: "Read article",
                    }, published_at: value.published_at, variant: "contained", screenSize: props === null || props === void 0 ? void 0 : props.screenSize }, index));
            });
        if ((renderedPosts === null || renderedPosts === void 0 ? void 0 : renderedPosts.length) === 0)
            return _jsxs("p", { children: ["There are no search results for \"", searchValue, "\""] });
        return renderedPosts === null || renderedPosts === void 0 ? void 0 : renderedPosts.map(function (value, index) {
            var _a, _b;
            return (_jsx(Card, { title: ((_a = value === null || value === void 0 ? void 0 : value.title) === null || _a === void 0 ? void 0 : _a.length) > 35 ? ((_b = value === null || value === void 0 ? void 0 : value.title) === null || _b === void 0 ? void 0 : _b.slice(0, 32)) + "..." : value === null || value === void 0 ? void 0 : value.title, category_name: value === null || value === void 0 ? void 0 : value.category_name, featured_image: value.featured_image, excerpt: value.excerpt.length > 70 ? value.excerpt.slice(0, 67) + "..." : value.excerpt, mode: mode, slug: value === null || value === void 0 ? void 0 : value.slug, action: {
                    title: "Read article",
                }, published_at: value.published_at, variant: "contained", screenSize: props === null || props === void 0 ? void 0 : props.screenSize }, index));
        });
    };
    return (_jsx(BlockProvider, { fonts: blockConfig.fonts, colors: blockConfig.colors, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.root, layout), children: _jsxs("div", { className: classes.container, children: [_jsxs("header", { className: clx(classes.blockHeading, layout), children: [_jsx("p", { className: classes.overline, children: (_k = content === null || content === void 0 ? void 0 : content.text) === null || _k === void 0 ? void 0 : _k.overline }), _jsx("h4", { className: classes.title, children: isPosts ? (_l = content === null || content === void 0 ? void 0 : content.text) === null || _l === void 0 ? void 0 : _l.main : "There are no articles to display" }), _jsx("p", { className: classes.caption, children: (_m = content === null || content === void 0 ? void 0 : content.text) === null || _m === void 0 ? void 0 : _m.subtext }), sm && !layout2or3or4.includes(layout !== null && layout !== void 0 ? layout : "") && _jsx("h6", { className: classes.menuTitle, children: (_o = content === null || content === void 0 ? void 0 : content.text) === null || _o === void 0 ? void 0 : _o.postTitle })] }), isPosts && (_jsxs("div", { children: [_jsx("div", { className: classes.horizontalMenuContainer, children: (lgScreens || layout2or3or4.includes(layout)) && render(true) }), _jsxs("div", { className: classes.menuHeader, children: [_jsx("div", { className: clx(classes.menuHeading, layout), children: _jsx("h6", { className: classes.menuTitle, children: (_p = content === null || content === void 0 ? void 0 : content.text) === null || _p === void 0 ? void 0 : _p.menuTitle }) }), _jsx("div", { className: clx(classes.menuSearchBar, layout), children: _jsx(SearchBar, { value: searchValue, onChange: handleSearchChange, onSubmit: function () { } }) })] }), _jsxs("article", { className: classes.block, children: [_jsx("div", { className: clx(classes.menuCategoryContainer, layout), children: render() }), _jsx("div", { className: clx(classes.menuItemsContainer, layout), children: renderPosts() })] }), isLoadMore && (_jsx(BlockProvider, __assign({}, buttonConfig, { block_uuid: BLOCK_UUID, children: _jsx("div", { className: classes.buttonContainer, children: _jsx(Button, { variant: "contained", size: "large", onClick: function () {
                                            fetchPosts(activeCategoryUuid, true);
                                        }, children: loading ? _jsx("span", { className: classes.spinner }) : "Load More" }) }) })))] }))] }) }) }));
};
