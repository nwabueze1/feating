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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useEuBlock13Styles, SearchBar } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration } from "../../helpers";
import { Card, MenuList } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { mapMenuCategory } from ".";
import { useMediaQuery, useTheme } from "@mui/material";
import block13 from "../../mappings/block13";
import { decodeText } from "../../helpers/decodeText";
var BLOCK_UUID = block13.uuid;
export var EuBlock13 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var content = _a.content, _h = _a.mode, mode = _h === void 0 ? "view" : _h, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, props = __rest(_a, ["content", "mode", "index", "activeElement", "handleSelect"]);
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
    var menuConfig = getConfiguration(props.configuration, "menu", getMappedColor);
    var classes = useEuBlock13Styles(blockConfig);
    var layout = useSelectedLayout(props.layouts);
    var menu = content === null || content === void 0 ? void 0 : content.menu;
    var menuCategories = menu === null || menu === void 0 ? void 0 : menu.menuCategories;
    var _j = __read(useState((menuCategories === null || menuCategories === void 0 ? void 0 : menuCategories.length) > 0 ? (_b = menuCategories[0]) === null || _b === void 0 ? void 0 : _b.uuid : ""), 2), activeCategoryId = _j[0], setActiveCategoryId = _j[1];
    var theme = useTheme();
    var lgScreens = useMediaQuery(theme.breakpoints.down("lg"));
    var layout2or3or4 = ["layout-2", "layout-3", "layout-4"];
    var sm = useMediaQuery(theme.breakpoints.down("sm"));
    var _k = __read(useState(""), 2), initialSearchValue = _k[0], setInitialSearchValue = _k[1];
    var _l = __read(useState([]), 2), filteredDish = _l[0], setFilteredDish = _l[1];
    var key = "blocks." + String(index);
    useEffect(function () {
        var _a;
        setActiveCategoryId((menuCategories === null || menuCategories === void 0 ? void 0 : menuCategories.length) > 0 ? (_a = menuCategories[0]) === null || _a === void 0 ? void 0 : _a.uuid : "");
    }, [menuCategories]);
    var renderMenuCategory = function (showMobile) { return (_jsx(BlockProvider, { fonts: menuConfig.fonts, colors: menuConfig.colors, block_uuid: BLOCK_UUID, children: _jsx(MenuList, { noScroll: true, gap: sm ? "1px" : undefined, onSelectMenu: function (item) { return setActiveCategoryId(item.uuid); }, data: mapMenuCategory(menu), showMobile: showMobile }) })); };
    var getActiveMenuItems = function (menu_category_uuid) { var _a; return (_a = menu === null || menu === void 0 ? void 0 : menu.menuItems) === null || _a === void 0 ? void 0 : _a.filter(function (item) { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.menuCategory) === null || _a === void 0 ? void 0 : _a.uuid) === menu_category_uuid; }); };
    var resetSearch = function () {
        setFilteredDish([]);
        setInitialSearchValue("");
    };
    var handleSearch = function () {
        var _a;
        if (initialSearchValue.length === 0)
            return;
        setFilteredDish((_a = getActiveMenuItems(activeCategoryId)) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.name.toLocaleLowerCase().includes(initialSearchValue.toLocaleLowerCase()); }));
    };
    var handleSearchChange = function (e) {
        var _a;
        if (!e.target.value)
            return resetSearch();
        var value = e.target.value.toLowerCase();
        setInitialSearchValue(value);
        setFilteredDish((_a = getActiveMenuItems(activeCategoryId)) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.name.toLocaleLowerCase().includes(value); }));
    };
    var renderProducts = function () {
        var _a;
        return (_a = (filteredDish.length > 0 ? filteredDish : initialSearchValue ? [] : getActiveMenuItems(activeCategoryId))) === null || _a === void 0 ? void 0 : _a.map(function (value, index) {
            var _a, _b, _c, _d, _e, _f;
            return (_jsx(Card, { title: value.name, price: value.price, rating: 4, image: value === null || value === void 0 ? void 0 : value.image, subtitle: value.description, numberOfLines: 2, mode: mode, currency: (_c = (_b = (_a = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _a === void 0 ? void 0 : _a.bank_info) === null || _b === void 0 ? void 0 : _b.currency) !== null && _c !== void 0 ? _c : "", action: {
                    title: "View",
                    href: value === null || value === void 0 ? void 0 : value.slug,
                }, colors: { currency: (_d = blockConfig === null || blockConfig === void 0 ? void 0 : blockConfig.colors) === null || _d === void 0 ? void 0 : _d[100], action: { color: (_e = menuConfig === null || menuConfig === void 0 ? void 0 : menuConfig.colors) === null || _e === void 0 ? void 0 : _e[500], background: (_f = menuConfig === null || menuConfig === void 0 ? void 0 : menuConfig.colors) === null || _f === void 0 ? void 0 : _f[300] } } }, index));
        });
    };
    return (_jsx(BlockProvider, { fonts: blockConfig.fonts, colors: blockConfig.colors, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block13ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("div", { className: classes.container, children: [_jsxs("header", { className: clx(classes.blockHeading, layout), children: [_jsx("p", { className: classes.overline, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.overline) }), _jsx("h4", { className: classes.title, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.main) }), _jsx("p", { className: classes.caption, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.subtext) }), sm && !layout2or3or4.includes(layout !== null && layout !== void 0 ? layout : "") && _jsx("h6", { className: classes.menuTitle, children: (_f = content === null || content === void 0 ? void 0 : content.text) === null || _f === void 0 ? void 0 : _f.menuTitle })] }), _jsxs("div", { children: [_jsx("div", { className: classes.horizontalMenuContainer, children: (lgScreens || layout2or3or4.includes(layout)) && renderMenuCategory(true) }), _jsxs("div", { className: classes.menuHeader, children: [_jsx("div", { className: clx(classes.menuHeading, layout), children: _jsx("h6", { className: classes.menuTitle, children: decodeText((_g = content === null || content === void 0 ? void 0 : content.text) === null || _g === void 0 ? void 0 : _g.menuTitle) }) }), _jsx("div", { className: clx(classes.menuSearchBar, layout), children: _jsx(SearchBar, { value: initialSearchValue, onChange: handleSearchChange, onSubmit: handleSearch }) })] }), _jsxs("article", { className: classes.block, children: [_jsx("div", { className: clx(classes.menuCategoryContainer, layout), children: renderMenuCategory() }), _jsx("div", { className: clx(classes.menuItemsContainer, layout), children: renderProducts() })] })] })] }) }) }));
};
