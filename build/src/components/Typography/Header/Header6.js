"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview The implementation of the <h1>–<h6>: The HTML Section Heading
 * elements
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * The HTML Section Heading Component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Caption component
 */
const Header6 = ({ children, className }) => {
    const headerClassPrefix = {
        [index_module_scss_1.default[`${index_1.prefix}-header--6`]]: true,
    };
    const headerClasses = (0, classnames_1.default)(className, headerClassPrefix);
    return (0, jsx_runtime_1.jsx)("h6", Object.assign({ className: headerClasses }, { children: children }));
};
exports.default = Header6;
//# sourceMappingURL=Header6.js.map