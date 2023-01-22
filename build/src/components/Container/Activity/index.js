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
exports.Apps = exports.Tabs = exports.Activity = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview Activity container component, which is used in the extension.
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const settings_1 = require("../../../settings/");
require("./index.css");
/**
 * Activity container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
const Activity = (_a) => {
    var { children, className } = _a, other = __rest(_a, ["children", "className"]);
    const containerClassPrefix = {
        [`${settings_1.prefix}-activity-container`]: true,
    };
    const buttonClasses = (0, classnames_1.default)(className, containerClassPrefix);
    const commonProps = {
        className: buttonClasses,
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, other, commonProps, { children: children })));
};
exports.Activity = Activity;
/**
 * Tab container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Function} props.onClickNewTab
 * @param {Object} props.other
 * @constructor
 */
const Tabs = (_a) => {
    var { children, className, onClickNewTab } = _a, other = __rest(_a, ["children", "className", "onClickNewTab"]);
    const containerClassPrefix = {
        [`${settings_1.prefix}-tab-container`]: true,
        [`${settings_1.prefix}-tab-button-container`]: true,
    };
    const newTabClassPrefix = {
        [`${settings_1.prefix}-tab-button--new-tab`]: true,
        [`${settings_1.prefix}-tab-button-item`]: true,
    };
    const buttonClasses = (0, classnames_1.default)(className, containerClassPrefix);
    const commonProps = {
        className: buttonClasses,
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, other, commonProps, { children: children })), (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: onClickNewTab, className: (0, classnames_1.default)(newTabClassPrefix) }, { children: "+" }))] }));
};
exports.Tabs = Tabs;
/**
 * Apps container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
const Apps = (_a) => {
    var { children, className } = _a, other = __rest(_a, ["children", "className"]);
    const containerClassPrefix = {
        [`${settings_1.prefix}-app-container`]: true,
    };
    const buttonClasses = (0, classnames_1.default)(className, containerClassPrefix);
    const commonProps = {
        className: buttonClasses,
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, other, commonProps, { children: children })));
};
exports.Apps = Apps;
//# sourceMappingURL=index.js.map