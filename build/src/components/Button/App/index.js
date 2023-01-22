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
 * @fileoverview Kind of button component, which is used in the App component in
 * extension.
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const settings_1 = require("../../../settings");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * AppButton component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {boolean} props.small
 * @param {string} props.kind
 * @param {string} props.href
 * @param {number} props.tabIndex
 * @param {string} props.type
 * @param {boolean} props.opened
 * @param {boolean} props.active
 * @param {string} props.buttonDescription
 * @param {string} props.buttonImage
 * @param {Object} props.other
 * @constructor
 */
const AppButton = (_a) => {
    var { children, className, disabled, skeleton, small, kind, href, tabIndex, type, opened, active, buttonDescription, buttonImage } = _a, other = __rest(_a, ["children", "className", "disabled", "skeleton", "small", "kind", "href", "tabIndex", "type", "opened", "active", "buttonDescription", "buttonImage"]);
    const buttonClassPrefix = {
        [index_module_scss_1.default[`${settings_1.prefix}-app-button`]]: true,
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--sm`]]: small,
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--primary`]]: kind === 'primary',
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--danger`]]: kind === 'danger',
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--secondary`]]: kind === 'secondary',
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--ghost`]]: kind === 'ghost',
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--tertiary`]]: kind === 'tertiary',
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--disabled`]]: disabled,
        [index_module_scss_1.default[`${settings_1.prefix}-app-button--skeleton`]]: skeleton,
    };
    const buttonClasses = (0, classnames_1.default)(className, buttonClassPrefix);
    const commonProps = {
        className: buttonClasses,
        tabIndex: tabIndex,
    };
    const otherProps = {
        disabled,
        type,
    };
    if (typeof href === 'undefined') {
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, other, commonProps, otherProps, { children: [typeof children !== 'undefined' ? (children) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_module_scss_1.default[`${settings_1.prefix}-app-button--image`] }, { children: (0, jsx_runtime_1.jsx)("img", { src: buttonImage, alt: buttonDescription }) }))), opened && ((0, jsx_runtime_1.jsx)("div", { className: index_module_scss_1.default[`${settings_1.prefix}-app-button--opened`] })), active && ((0, jsx_runtime_1.jsx)("div", { className: index_module_scss_1.default[`${settings_1.prefix}-app-button--active`] }))] })));
    }
    else {
        // If href is provided, render an anchor tag
        const anchorProps = {
            role: 'button',
            href,
            alt: 'buttonDescription',
        };
        return ((0, jsx_runtime_1.jsxs)("a", Object.assign({}, other, anchorProps, commonProps, otherProps, { children: [typeof children !== 'undefined' ? (children) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_module_scss_1.default[`${settings_1.prefix}-app-button--image`] }, { children: (0, jsx_runtime_1.jsx)("img", { src: buttonImage, alt: buttonDescription }) }))), opened && ((0, jsx_runtime_1.jsx)("div", { className: index_module_scss_1.default[`${settings_1.prefix}-app-button--opened`] })), active && ((0, jsx_runtime_1.jsx)("div", { className: index_module_scss_1.default[`${settings_1.prefix}-app-button--active`] }))] })));
    }
};
exports.default = AppButton;
//# sourceMappingURL=index.js.map