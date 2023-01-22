/**
 * @fileoverview ControllerButton component, which is used in the Controller
 * component in. Its help to show the available controller buttons for the user.
 */
import { Button } from './index.type';
/**
 * Controller Button component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {boolean} props.small
 * @param {string} props.kind
 * @param {string} props.href
 * @param {number} props.tabIndex
 * @param {string} props.type
 * @param {string} props.buttonDescription
 * @param {string} props.buttonName
 * @param {Object} props.other
 * @constructor
 */
declare const ControllerButton: ({ className, disabled, skeleton, small, kind, href, tabIndex, type, wide, buttonDescription, buttonName, ...other }: Button & React.HTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLAnchorElement>) => JSX.Element;
export default ControllerButton;
