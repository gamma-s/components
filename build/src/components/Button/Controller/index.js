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
 * @fileoverview ControllerButton component, which is used in the Controller
 * component in. Its help to show the available controller buttons for the user.
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const Typography_1 = require("../../../components/Typography");
const settings_1 = require("../../../settings/");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * Controller Button component
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
 * @param {string} props.buttonDescription
 * @param {string} props.buttonName
 * @param {Object} props.other
 * @constructor
 */
const ControllerButton = (_a) => {
    var { className, disabled, skeleton, small, kind, href, tabIndex, type, wide, buttonDescription, buttonName } = _a, other = __rest(_a, ["className", "disabled", "skeleton", "small", "kind", "href", "tabIndex", "type", "wide", "buttonDescription", "buttonName"]);
    const MODIFIER = 'controller-button';
    const buttonClassPrefix = {
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}`]]: true,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--sm`]]: small,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--primary`]]: kind === 'primary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--danger`]]: kind === 'danger',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--secondary`]]: kind === 'secondary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--ghost`]]: kind === 'ghost',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--tertiary`]]: kind === 'tertiary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--wide`]]: wide,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--disabled`]]: disabled,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--skeleton`]]: skeleton,
    };
    const nameClassPrefix = {
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}-name`]]: true,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--sm-name`]]: small,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--primary-name`]]: kind === 'primary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--danger-name`]]: kind === 'danger',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--secondary-name`]]: kind === 'secondary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--ghost-name`]]: kind === 'ghost',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--tertiary-name`]]: kind === 'tertiary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--wide-name`]]: wide,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--disabled-name`]]: disabled,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--skeleton-name`]]: skeleton,
    };
    const descriptionClassPrefix = {
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}-description`]]: true,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--sm-description`]]: small,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--primary-description`]]: kind === 'primary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--danger-description`]]: kind === 'danger',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--secondary-description`]]: kind === 'secondary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--ghost-description`]]: kind === 'ghost',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--tertiary-description`]]: kind === 'tertiary',
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--wide-description`]]: wide,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--disabled-description`]]: disabled,
        [index_module_scss_1.default[`${settings_1.prefix}-${MODIFIER}--skeleton-description`]]: skeleton,
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
        return ((0, jsx_runtime_1.jsxs)("button", Object.assign({}, other, commonProps, otherProps, { children: [(0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: (0, classnames_1.default)(nameClassPrefix) }, { children: buttonName })), (0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: (0, classnames_1.default)(descriptionClassPrefix) }, { children: buttonDescription }))] })));
    }
    else {
        // If href is provided, render an anchor tag
        const anchorProps = {
            role: 'button',
            href,
        };
        return ((0, jsx_runtime_1.jsxs)("a", Object.assign({}, other, anchorProps, commonProps, otherProps, { children: [(0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: (0, classnames_1.default)(nameClassPrefix) }, { children: buttonName })), (0, jsx_runtime_1.jsx)(Typography_1.ButtonText, Object.assign({ className: (0, classnames_1.default)(descriptionClassPrefix) }, { children: buttonDescription }))] })));
    }
};
exports.default = ControllerButton;
//# sourceMappingURL=index.js.map