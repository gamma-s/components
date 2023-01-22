"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview TabButton component, which is used in the Tab component in.
 * Shows the opened tabs in the browser.
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const ContextMenu_1 = __importDefault(require("../../ContextMenu"));
const settings_1 = require("../../../settings");
const TabButton_module_scss_1 = __importDefault(require("./TabButton.module.scss"));
/**
 * Tab Button component
 * @param {Object} props
 * @param {string} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {number} props.tabIndex
 * @param {number} props.activeId
 * @param {Object} props.button
 * @param {number} props.button.id
 * @param {string} props.button.name
 * @param {string} props.button.description
 * @param {Object} props.other
 * @constructor
 */
const TabButton = (_a) => {
    var { children, className, disabled, skeleton, tabIndex, activeId, button } = _a, other = __rest(_a, ["children", "className", "disabled", "skeleton", "tabIndex", "activeId", "button"]);
    if (typeof button === 'undefined') {
        button = {
            id: 0,
            url: '',
            title: '',
        };
    }
    const buttonClassPrefix = {
        [TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button`]]: true,
        [TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button--active`]]: button.id === activeId,
        [TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button--skeleton`]]: skeleton,
    };
    const buttonItemClassPrefix = {
        [TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button-item`]]: true,
        [TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button--active-item`]]: button.id === activeId,
        [`${settings_1.prefix}-tab-button-${button.id}`]: true,
    };
    const buttonClasses = (0, classnames_1.default)(className, buttonClassPrefix);
    const commonProps = {
        className: buttonClasses,
        tabIndex: tabIndex,
    };
    const otherProps = {
        disabled,
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, other, commonProps, otherProps, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(buttonItemClassPrefix) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button-text`] }, { children: button.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: TabButton_module_scss_1.default[`${settings_1.prefix}-tab-button-url`] }, { children: button.url }))] })), children && ((0, jsx_runtime_1.jsx)(ContextMenu_1.default, Object.assign({ target: `${settings_1.prefix}-tab-button-${button.id}`, position: "top", fill: true, container: `${settings_1.prefix}-tab-button--container` }, { children: children })))] })));
};
exports.default = TabButton;
//# sourceMappingURL=TabButton.js.map