/**
 * @fileoverview Context Menu implementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
 */
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
declare const ContextMenu: ({ children, target, position, fill, container, }: {
    children: React.ReactNode;
    target: string;
    position: string;
    fill: boolean;
    container: string;
}) => JSX.Element;
export default ContextMenu;
