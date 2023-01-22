"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview The implementation of the HTML Caption element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 */
/**
 * Module dependencies
 */
const classnames_1 = __importDefault(require("classnames"));
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * Caption component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Caption component
 */
const CaptionText = ({ children, className }) => {
    const captionClassPrefix = {
        [index_module_scss_1.default[`${index_1.prefix}-caption--text`]]: true,
    };
    const captionClasses = (0, classnames_1.default)(className, captionClassPrefix);
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: captionClasses }, { children: children }));
};
exports.default = CaptionText;
//# sourceMappingURL=Caption.js.map