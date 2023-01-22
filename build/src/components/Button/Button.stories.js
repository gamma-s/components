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
exports.Skeleton = exports.Tertiary = exports.Danger = exports.Ghost = exports.Secondary = exports.Primary = exports.Template = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
const meta = {
    title: 'Button',
    component: Button_1.default,
};
exports.default = meta;
const Template = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({}, args, { children: children }));
};
exports.Template = Template;
exports.Primary = exports.Template.bind({});
exports.Primary.args = {
    children: 'Button',
    kind: 'primary',
};
exports.Secondary = exports.Template.bind({});
exports.Secondary.args = {
    kind: 'secondary',
};
exports.Ghost = exports.Template.bind({});
exports.Ghost.args = {
    kind: 'ghost',
};
exports.Danger = exports.Template.bind({});
exports.Danger.args = {
    kind: 'danger',
};
exports.Tertiary = exports.Template.bind({});
exports.Tertiary.args = {
    kind: 'danger',
};
exports.Skeleton = exports.Template.bind({});
exports.Skeleton.args = {
    skeleton: true,
};
//# sourceMappingURL=Button.stories.js.map