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
 * @fileoverview The implementation of the HTML Button element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const Typography_1 = require("../Typography");
const settings_1 = require("../../settings");
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = (_a) => {
    var { className, disabled, skeleton, small, kind, href, tabIndex, type, children } = _a, other = __rest(_a, ["className", "disabled", "skeleton", "small", "kind", "href", "tabIndex", "type", "children"]);
    const MODIFIER = 'button';
    const buttonClassPrefix = {
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}`]]: true,
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--sm`]]: small,
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--primary`]]: kind === 'primary',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--danger`]]: kind === 'danger',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--secondary`]]: kind === 'secondary',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--ghost`]]: kind === 'ghost',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--tertiary`]]: kind === 'tertiary',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--context`]]: kind === 'context',
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--disabled`]]: disabled,
        [Button_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--skeleton`]]: skeleton,
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
        return ((0, jsx_runtime_1.jsx)("button", Object.assign({}, other, commonProps, otherProps, { children: (0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: Button_module_scss_1.default[`${settings_1.prefix}-button-text`] }, { children: children })) })));
    }
    else {
        // If href is provided, render an anchor tag
        const anchorProps = {
            role: 'button',
            href,
        };
        return ((0, jsx_runtime_1.jsx)("a", Object.assign({}, other, anchorProps, commonProps, otherProps, { children: (0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: Button_module_scss_1.default[`${settings_1.prefix}-button-text`] }, { children: children })) })));
    }
};
exports.default = Button;
//# sourceMappingURL=Button.js.map