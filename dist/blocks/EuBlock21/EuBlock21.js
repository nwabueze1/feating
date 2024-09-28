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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetColor } from "../../hooks";
import { useGetConfiguration } from "../../helpers";
import { useBlock21Styles } from "./useBlock21Styles";
import { MdSearch } from "react-icons/md";
import { useSearchMenuItems, useSearchPosts } from "./hooks";
import { BlockProvider } from "../../BlockProvider";
import { useRenderData } from "./useRenderData";
export var EuBlock21 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var configuration = _a.configuration, _j = _a.mode, mode = _j === void 0 ? "view" : _j, index = _a.index, handleSelect = _a.handleSelect;
    var _k = useSelector(function (store) { return store; }), restaurant = _k.restaurant, blog = _k.blog, loading = _k.loading;
    // This is the state param used to track the search param as the user is typing
    var _l = __read(useState(""), 2), searchField = _l[0], setSearchField = _l[1];
    // This is the displayed search parameter used once the user has selected search
    var _m = __read(useState(""), 2), searchValue = _m[0], setSearchValue = _m[1];
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var mainConfig = getConfiguration(configuration, "main", getMappedColor);
    var classes = useBlock21Styles(mainConfig);
    var _o = __read(useState("all"), 2), activeTag = _o[0], setActiveTag = _o[1];
    var _p = __read(useState(""), 2), operation = _p[0], setOperation = _p[1];
    var tags = ["all", "dishes", "blog"];
    var searchPosts = useSearchPosts();
    var searchMenuItems = useSearchMenuItems();
    var _q = useRenderData(mode, classes), renderPosts = _q.renderPosts, renderMenuItems = _q.renderMenuItems, renderImageSkeleton = _q.renderImageSkeleton, renderTags = _q.renderTags;
    var key = "blocks." + String(index);
    var handleChange = function (e) {
        setSearchField(e.target.value);
    };
    var dispatch = useDispatch();
    var menuItems = (_c = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu) === null || _b === void 0 ? void 0 : _b.menuItems) !== null && _c !== void 0 ? _c : [];
    var storePosts = (_d = blog === null || blog === void 0 ? void 0 : blog.posts) !== null && _d !== void 0 ? _d : [];
    var menuPaginatorInfo = ((_e = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu) === null || _e === void 0 ? void 0 : _e.paginatorInfo) || { currentPage: 0, lastPage: 1 };
    var postsPaginatorInfo = (blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) || { currentPage: 0, lastPage: 1 };
    var handleSearch = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var posts, menus, ex_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (searchField.length === 0 || loading)
                        return [2 /*return*/];
                    setSearchValue(searchField);
                    dispatch({
                        type: "SET_LOADING",
                        payload: true,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, searchPosts(searchField, postsPaginatorInfo.currentPage)];
                case 2:
                    posts = _a.sent();
                    if (posts) {
                        dispatch({
                            type: "GET_POSTS",
                            payload: __spreadArray([], __read(posts.posts), false),
                        });
                        dispatch({
                            type: "SET_BLOG_PAGINATION",
                            payload: posts.paginatorInfo,
                        });
                    }
                    return [4 /*yield*/, searchMenuItems(searchField, menuPaginatorInfo.currentPage)];
                case 3:
                    menus = _a.sent();
                    if (menus) {
                        dispatch({
                            type: "GET_MENU_ITEMS",
                            payload: __spreadArray([], __read(menus.menuItems), false),
                        });
                        dispatch({
                            type: "SET_MENU_PAGINATION",
                            payload: menus.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 6];
                case 4:
                    ex_1 = _a.sent();
                    console.log(ex_1);
                    return [3 /*break*/, 6];
                case 5:
                    dispatch({
                        type: "SET_LOADING",
                        payload: false,
                    });
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, menu, posts, ex_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setOperation(tag === "dishes" ? "search_menu_items" : "search_posts");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    _a = tag;
                    switch (_a) {
                        case "dishes": return [3 /*break*/, 2];
                        case "blog": return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, searchMenuItems(searchValue, menuPaginatorInfo.currentPage + 1)];
                case 3:
                    menu = _b.sent();
                    if (menu) {
                        dispatch({
                            type: "GET_MENU_ITEMS",
                            payload: __spreadArray(__spreadArray([], __read(menuItems), false), __read(menu.menuItems), false),
                        });
                        dispatch({
                            type: "SET_MENU_PAGINATION",
                            payload: menu.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, searchPosts(searchValue, postsPaginatorInfo.currentPage + 1)];
                case 5:
                    posts = _b.sent();
                    if (posts) {
                        dispatch({
                            type: "GET_POSTS",
                            payload: __spreadArray(__spreadArray([], __read(storePosts), false), __read(posts.posts), false),
                        });
                        dispatch({
                            type: "SET_BLOG_PAGINATION",
                            payload: posts.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 7];
                case 6: return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 10];
                case 8:
                    ex_2 = _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    setOperation("");
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        var _a;
        var params = new URLSearchParams(window.location.search);
        var query = (_a = params.get("query")) !== null && _a !== void 0 ? _a : "";
        setSearchField(query);
        setSearchValue(query);
    }, []);
    var renderSearchBar = function () { return (_jsxs("form", { className: classes.searchContainer, onSubmit: handleSearch, children: [_jsx("input", { value: searchField, onChange: handleChange, className: classes.input, placeholder: "Type something", autoFocus: true }), _jsx("button", { className: classes.searchButton, type: "submit", disabled: loading, children: _jsx(MdSearch, {}) })] })); };
    var renderLoadMoreBtn = function (tag) { return (_jsx("div", { className: classes.loadMoreBtnParent, children: _jsx("button", { className: classes.loadMoreBtn, onClick: function () { return handleLoadMore(tag); }, disabled: loading, children: "Load more" }) })); };
    return (_jsx(BlockProvider, { fonts: mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.fonts, colors: __assign({}, mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors), children: _jsx("section", { className: classes.root, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, children: _jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.blockHeader, children: [renderSearchBar(), ((storePosts === null || storePosts === void 0 ? void 0 : storePosts.length) > 0 || (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 0) && (_jsxs("header", { className: classes.header, children: [_jsx("div", { className: classes.tagsContainer, children: renderTags({ setActiveTag: setActiveTag, tags: tags, activeTag: activeTag }) }), (menuItems.length > 0 || storePosts.length > 0) && (_jsxs("p", { className: classes.searchResultText, children: [activeTag === "all" ? menuItems.length + storePosts.length : activeTag === "blog" ? storePosts === null || storePosts === void 0 ? void 0 : storePosts.length : menuItems === null || menuItems === void 0 ? void 0 : menuItems.length, " results found for ", searchValue] }))] }))] }), (activeTag === "all" || activeTag === "dishes") && (_jsxs(_Fragment, { children: [_jsxs("div", { children: [(menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 0 && _jsxs("p", { className: classes.title, children: ["Dishes (", menuItems === null || menuItems === void 0 ? void 0 : menuItems.length, ")"] }), _jsx("div", { className: classes.cardContainer, children: renderMenuItems(menuItems, { currency: (_f = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _f === void 0 ? void 0 : _f[1000], action: { background: (_g = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _g === void 0 ? void 0 : _g[700], color: (_h = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _h === void 0 ? void 0 : _h[100] } }) }), (menuPaginatorInfo === null || menuPaginatorInfo === void 0 ? void 0 : menuPaginatorInfo.currentPage) !== (menuPaginatorInfo === null || menuPaginatorInfo === void 0 ? void 0 : menuPaginatorInfo.lastPage) && (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 0 && renderLoadMoreBtn("dishes")] }), operation === "search_menu_items" && renderImageSkeleton()] })), (activeTag === "all" || activeTag === "blog") && (_jsxs("div", { children: [(storePosts === null || storePosts === void 0 ? void 0 : storePosts.length) > 0 && _jsxs("p", { className: classes.title, children: ["Posts (", storePosts.length, ")"] }), _jsx("div", { className: classes.cardContainer, children: renderPosts(storePosts) }), operation === "search_posts" && renderImageSkeleton(), (postsPaginatorInfo === null || postsPaginatorInfo === void 0 ? void 0 : postsPaginatorInfo.currentPage) !== (postsPaginatorInfo === null || postsPaginatorInfo === void 0 ? void 0 : postsPaginatorInfo.lastPage) && storePosts.length > 0 && renderLoadMoreBtn("blog")] })), loading && renderImageSkeleton(), (storePosts === null || storePosts === void 0 ? void 0 : storePosts.length) === 0 && (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) === 0 && (_jsx("p", { className: classes.searchResultText, style: { textAlign: "center" }, children: "There are no search results to display" }))] }) }) }));
};
