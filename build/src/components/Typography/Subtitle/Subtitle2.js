"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
const Subtitle2 = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_module_scss_1.default[`${index_1.prefix}-subtitle--2`] }, { children: children }));
};
exports.default = Subtitle2;
//# sourceMappingURL=Subtitle2.js.map