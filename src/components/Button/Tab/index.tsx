t;
/**
 * @fileoverview TabButton component, which is used in the Tab component in.
 * Shows the opened tabs in the browser.
 */

/**
 * Module dependencies
 */
import {Button} from './index.type';
import ContextMenu from '../../ContextMenu';
import {prefix} from '../../../settings';

import styles from './index.module.scss';
import {classPrefix} from '../../../helpers';

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
export const TabButton = ({
  children,
  className,
  disabled,
  skeleton,
  tabIndex,
  activeId,
  button,
  ...other
}: Button) => {
  if (typeof button === 'undefined') {
    button = {
      id: 0,
      url: '',
      title: '',
    };
  }

  const classNames = new classPrefix(styles, 'tab-button');

  const buttonClasses = classNames.create(
    {
      active: button.id === activeId,
      skeleton: skeleton,
    },
    className
  );

  const buttonItemClasses = classNames.create(
    {
      item: true,
      'active-item': button.id === activeId,
      'skeleton-item': skeleton,
    },
    `${prefix}-tab-button-${button.id}`
  );

  const commonProps = {
    className: buttonClasses,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
  };

  return (
    <div {...other} {...commonProps} {...otherProps}>
      <div className={buttonItemClasses}>
        <div className={classNames.action('text')}>{button.title}</div>
        <div className={classNames.action('url')}>{button.url}</div>
      </div>
      {children && (
        <ContextMenu
          target={`${prefix}-tab-button-${button.id}`}
          position="top"
          fill={true}
          container={classNames.action('container')}
        >
          {children}
        </ContextMenu>
      )}
    </div>
  );
};

export const TabSeperator = () => {
  const classNames = new classPrefix(styles, 'tab-seperator');

  return <div className={classNames.create()} />;
};

export const NewTab = () => {
  const classNames = new classPrefix(styles, 'new-tab');

  return <div className={classNames.create()}>+</div>;
};

export default TabButton;
