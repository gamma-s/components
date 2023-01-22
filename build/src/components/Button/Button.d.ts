/**
 * @fileoverview The implementation of the HTML Button element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
import { IButton } from './Button.type';
declare const Button: ({ className, disabled, skeleton, small, kind, href, tabIndex, type, children, ...other }: IButton) => JSX.Element;
export default Button;
