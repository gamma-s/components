"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @fileoverview Context Menu implementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
 */
/**
 * Module dependencies
 */
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const settings_1 = require("../../settings");
const index_module_scss_1 = __importDefault(require("./index.module.scss"));
/**
 * ContextMenu component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.target
 * @param {string} props.position
 * @param {boolean} props.fill
 * @param {string} props.container
 * @constructor
 */
const ContextMenu = ({ children, target, position, fill, container, }) => {
    /**
     * TODO: Replace with the reducer
     */
    const [xPos, setXPos] = (0, react_1.useState)('0px');
    const [yPos, setYPos] = (0, react_1.useState)('0px');
    const [show, setShow] = (0, react_1.useState)(false);
    const [width, setWidth] = (0, react_1.useState)('initial');
    (0, react_1.useEffect)(() => {
        /**
         * Handle click event
         * @param {MouseEvent} event
         */
        function calcPosition(event) {
            var _a, _b, _c, _d, _e;
            setShow(false);
            if ((_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.contains(target)) {
                setShow(!show);
                event.preventDefault();
                if (position === 'top') {
                    const viewportOffset = (_e = (_d = event.target) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect();
                    if (typeof viewportOffset === 'undefined')
                        return;
                    const top = window.innerHeight - viewportOffset.top;
                    const left = viewportOffset.left;
                    if (fill === true) {
                        setWidth(`${viewportOffset.width}px`);
                    }
                    setXPos(left + 'px');
                    setYPos(top + 'px');
                    if (top === 0 && left === 0) {
                        setShow(false);
                    }
                }
            }
        }
        /**
         * Handle click event
         * @param {MouseEvent} event
         */
        function onClick() {
            setShow(false);
        }
        const containerElement = document.querySelector(container);
        document.addEventListener('contextmenu', calcPosition);
        document.addEventListener('click', onClick);
        document.addEventListener('scroll', onClick);
        containerElement === null || containerElement === void 0 ? void 0 : containerElement.addEventListener('scroll', onClick);
        return () => {
            document.removeEventListener('contextmenu', calcPosition);
            document.removeEventListener('click', onClick);
            document.removeEventListener('scroll', onClick);
            containerElement === null || containerElement === void 0 ? void 0 : containerElement.removeEventListener('scroll', onClick);
        };
    }, []);
    return (0, react_dom_1.createPortal)(show && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: index_module_scss_1.default[`${settings_1.prefix}-context-menu`], style: { left: xPos, bottom: yPos, width } }, { children: children }))), document.body);
};
exports.default = ContextMenu;
//# sourceMappingURL=index.js.map