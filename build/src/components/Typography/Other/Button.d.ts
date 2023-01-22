/**
 * @fileoverview The implementation of the Button text element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
import { Typography } from './index.type';
/**
 * ButtonText component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} ButtonText component
 */
declare const ButtonText: ({ children, className }: Typography) => JSX.Element;
export default ButtonText;
