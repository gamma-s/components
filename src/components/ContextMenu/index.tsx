/**
 * @fileoverview Context Menu implementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
 */

/**
 * Module dependencies
 */
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {prefix} from '../../settings';

import styles from './index.module.scss';

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
const ContextMenu = ({
  children,
  target,
  position,
  fill,
  container,
}: {
  children: React.ReactNode;
  target: string;
  position: string;
  fill: boolean;
  container: string;
}): JSX.Element => {
  /**
   * TODO: Replace with the reducer
   */
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState('initial');

  useEffect(() => {
    /**
     * Handle click event
     * @param {MouseEvent} event
     */
    function calcPosition(event: MouseEvent) {
      setShow(false);

      if (
        (event?.target as HTMLElement)?.parentElement?.classList?.contains(
          target
        )
      ) {
        setShow(!show);

        event.preventDefault();

        if (position === 'top') {
          const viewportOffset = (
            event.target as HTMLElement
          )?.parentElement?.getBoundingClientRect();

          if (typeof viewportOffset === 'undefined') return;

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
    containerElement?.addEventListener('scroll', onClick);

    return () => {
      document.removeEventListener('contextmenu', calcPosition);
      document.removeEventListener('click', onClick);
      document.removeEventListener('scroll', onClick);
      containerElement?.removeEventListener('scroll', onClick);
    };
  }, []);

  return createPortal(
    show && (
      <div
        className={styles[`${prefix}-context-menu`]}
        style={{left: xPos, bottom: yPos, width}}
      >
        {children}
      </div>
    ),
    document.body
  );
};

export default ContextMenu;
