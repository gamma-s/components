"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview The implementation of the Overline component.
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * Overline component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Overline component
 */
const OverlineText = ({ children, className }) => {
    const overlineClassPrefix = {
        [index_module_scss_1.default[`${index_1.prefix}-overline--text`]]: true,
    };
    const overlineClasses = (0, classnames_1.default)(className, overlineClassPrefix);
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: overlineClasses }, { children: children }));
};
exports.default = OverlineText;
//# sourceMappingURL=Overline.js.map