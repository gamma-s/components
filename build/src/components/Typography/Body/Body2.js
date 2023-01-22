"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../../../settings/index");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
const Body2 = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_module_scss_1.default[`${index_1.prefix}-body--2`] }, { children: children }));
};
exports.default = Body2;
//# sourceMappingURL=Body2.js.map