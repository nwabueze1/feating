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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BlockLayouts, useGetConfiguration } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { useEuBlock6Styles, useItemStyles, useMenuStyles, transformMenu } from "./";
import { useState, useEffect } from "react";
import { Card, MenuList } from "../../components";
import { useGetColor } from "../../hooks/useGetColor";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelectedLayout } from "../../hooks";
import clx from "classnames";
import block6 from "../../mappings/block6";
import { decodeText } from "../../helpers/decodeText";
var BLOCK_UUID = block6.uuid;
export var EuBlock6 = function (_a) {
    var _b, _c, _d;
    var content = _a.content, layouts = _a.layouts, _e = _a.mode, mode = _e === void 0 ? "view" : _e, index = _a.index, activeElement = _a.activeElement, handleSelect = _a.handleSelect, configuration = _a.configuration, screenSize = _a.screenSize;
    var getMappedColor = useGetColor().getMappedColor;
    var getConfiguration = useGetConfiguration();
    var blockConfig = getConfiguration(configuration, "main", getMappedColor);
    var menuConfig = getConfiguration(configuration, "menu", getMappedColor);
    var classes = useEuBlock6Styles(blockConfig);
    var menuClass = useMenuStyles(menuConfig);
    var itemClasses = useItemStyles();
    var layout = useSelectedLayout(layouts);
    var theme = useTheme();
    var show3rows = useMediaQuery(theme.breakpoints.down(1440));
    var menu = content === null || content === void 0 ? void 0 : content.menu;
    var menuCategories = menu === null || menu === void 0 ? void 0 : menu.menuCategories;
    var _f = __read(useState((menuCategories === null || menuCategories === void 0 ? void 0 : menuCategories.length) > 0 ? (_b = menuCategories[0]) === null || _b === void 0 ? void 0 : _b.uuid : ""), 2), activeCategoryUuid = _f[0], setActiveCategoryUuid = _f[1];
    var key = "blocks." + String(index);
    useEffect(function () {
        var _a;
        setActiveCategoryUuid((menuCategories === null || menuCategories === void 0 ? void 0 : menuCategories.length) > 0 ? (_a = menuCategories[0]) === null || _a === void 0 ? void 0 : _a.uuid : "");
    }, [menuCategories]);
    var getHeading = function () {
        var _a, _b, _c;
        return (_jsxs(_Fragment, { children: [_jsx("p", { className: clx(classes.headerOverline, layout), children: decodeText((_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.overline) }), _jsx("h4", { className: clx(classes.headerTitle, layout), children: decodeText((_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.heading) }), _jsx("p", { className: clx(classes.caption, layout), children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.caption) })] }));
    };
    function getItemToDisplay(menuItems) {
        var content = [];
        var getNumberOfItems = show3rows ? 6 : 8;
        for (var i = 0; i < getNumberOfItems; i++) {
            if (!menuItems[i])
                return content;
            content.push(menuItems[i]);
        }
        return content;
    }
    var handleFindActiveMenuCategoryIndex = function (menuCategory) {
        setActiveCategoryUuid(menuCategory === null || menuCategory === void 0 ? void 0 : menuCategory.uuid);
    };
    var activeMenuItems = (_d = (_c = transformMenu(menu)) === null || _c === void 0 ? void 0 : _c.menuItems) === null || _d === void 0 ? void 0 : _d.filter(function (item) { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.menuCategory) === null || _a === void 0 ? void 0 : _a.uuid) === activeCategoryUuid; });
    var renderProducts = function () {
        var _a;
        return (_a = getItemToDisplay(activeMenuItems !== null && activeMenuItems !== void 0 ? activeMenuItems : [])) === null || _a === void 0 ? void 0 : _a.map(function (menuItem, index) {
            var _a, _b, _c, _d, _e, _f;
            return (_jsx("div", { className: clx(itemClasses.cardContent, layout), children: _jsx(Card, { action: {
                        href: (_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.slug) !== null && _a !== void 0 ? _a : "",
                        title: "View",
                    }, screenSize: screenSize, rating: 5, title: menuItem.name, subtitle: menuItem.description, price: menuItem.price, image: menuItem === null || menuItem === void 0 ? void 0 : menuItem.image, mode: mode, currency: (_d = (_c = (_b = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", colors: { action: { color: (_e = menuConfig === null || menuConfig === void 0 ? void 0 : menuConfig.colors) === null || _e === void 0 ? void 0 : _e[500], background: (_f = menuConfig === null || menuConfig === void 0 ? void 0 : menuConfig.colors) === null || _f === void 0 ? void 0 : _f[300] } } }, index) }, index));
        });
    };
    var renderMenuList = function (showMobile) {
        if (showMobile === void 0) { showMobile = false; }
        return (_jsx(BlockProvider, { fonts: menuConfig.fonts, colors: menuConfig.colors, block_uuid: BLOCK_UUID, children: _jsx(MenuList, { showMobile: showMobile, data: transformMenu(menu).menuCategories, onSelectMenu: handleFindActiveMenuCategoryIndex }) }));
    };
    return (_jsx(BlockProvider, { colors: blockConfig.colors, fonts: blockConfig.fonts, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.root, mode === "edit" && key === activeElement && classes.block6ActiveElement), onClick: function () {
                mode === "edit" && (handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key));
            }, children: _jsxs("article", { className: classes.container, children: [_jsxs("div", { className: classes.block, children: [layout === BlockLayouts.LAYOUT_3 && _jsx("div", { children: getHeading() }), _jsx("div", { className: clx(classes.header, layout), children: _jsx("div", { className: (classes.heading, layout), children: layout !== BlockLayouts.LAYOUT_3 && getHeading() }) })] }), layout === BlockLayouts.LAYOUT_3 && _jsx("div", { className: clx(menuClass.menuContent, layout), children: renderMenuList(true) }), _jsxs("div", { className: clx(itemClasses.menuBlock, layout), children: [_jsx("div", { className: menuClass.menuContent, children: layout !== BlockLayouts.LAYOUT_3 && renderMenuList() }), _jsx("div", { className: clx(itemClasses.menuContent, layout), children: _jsx("div", { className: clx(itemClasses.cardContainer, layout), children: renderProducts() }) })] })] }) }) }));
};
