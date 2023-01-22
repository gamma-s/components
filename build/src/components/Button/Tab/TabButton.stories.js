"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TabButton_1 = __importDefault(require("./TabButton"));
exports.default = {
    title: 'TabButton',
    component: TabButton_1.default,
};
const Template = args => {
    return (0, jsx_runtime_1.jsx)(TabButton_1.default, Object.assign({}, args));
};
exports.Default = Template.bind({});
exports.Default.args = {
    button: { url: 'www.google.com', title: 'Google', id: 1 },
};
exports.Skeleton = Template.bind({});
exports.Skeleton.args = {
    skeleton: true,
};
//# sourceMappingURL=TabButton.stories.js.map