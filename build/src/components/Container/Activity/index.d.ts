/**
 * @fileoverview Activity container component, which is used in the extension.
 */
import './index.css';
/**
 * Activity container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export declare const Activity: ({ children, className, ...other }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
/**
 * Tab container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Function} props.onClickNewTab
 * @param {Object} props.other
 * @constructor
 */
export declare const Tabs: ({ children, className, onClickNewTab, ...other }: import("react").HTMLAttributes<HTMLDivElement> & {
    onClickNewTab?: (() => void) | undefined;
}) => JSX.Element;
/**
 * Apps container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export declare const Apps: ({ children, className, ...other }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
