/**
 * @fileoverview Kind of button component, which is used in the App component in
 * extension.
 */
import { Button } from './index.type';
/**
 * AppButton component
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
 * @param {boolean} props.opened
 * @param {boolean} props.active
 * @param {string} props.buttonDescription
 * @param {string} props.buttonImage
 * @param {Object} props.other
 * @constructor
 */
declare const AppButton: ({ children, className, disabled, skeleton, small, kind, href, tabIndex, type, opened, active, buttonDescription, buttonImage, ...other }: Button & React.HTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLAnchorElement>) => JSX.Element;
export default AppButton;
