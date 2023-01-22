/**
 * @fileoverview TabButton component, which is used in the Tab component in.
 * Shows the opened tabs in the browser.
 */
import { Button } from './TabButton.type';
/**
 * Tab Button component
 * @param {Object} props
 * @param {string} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {number} props.tabIndex
 * @param {number} props.activeId
 * @param {Object} props.button
 * @param {number} props.button.id
 * @param {string} props.button.name
 * @param {string} props.button.description
 * @param {Object} props.other
 * @constructor
 */
declare const TabButton: ({ children, className, disabled, skeleton, tabIndex, activeId, button, ...other }: Button) => JSX.Element;
export default TabButton;
