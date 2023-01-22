"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview The implementation of the Button text element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * ButtonText component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} ButtonText component
 */
const ButtonText = ({ children, className }) => {
    const buttonClassPrefix = {
        [index_module_scss_1.default[`${index_1.prefix}-button--text`]]: true,
    };
    const buttonClasses = (0, classnames_1.default)(className, buttonClassPrefix);
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: buttonClasses }, { children: children }));
};
exports.default = ButtonText;
//# sourceMappingURL=Button.js.map