/**
 * @fileoverview The implementation of the HTML Caption element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 */
import { Typography } from './index.type';
/**
 * Caption component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Caption component
 */
declare const CaptionText: ({ children, className }: Typography) => JSX.Element;
export default CaptionText;
