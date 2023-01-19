/**
 * @fileoverview TabButton component, which is used in the Tab component in.
 * Shows the opened tabs in the browser.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Button} from './index.type';
import ContextMenu from '../../ContextMenu';
import {prefix} from '../../../settings';

import styles from './index.module.scss';

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
const TabButton = ({
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

  const buttonClassPrefix = {
    [styles[`${prefix}-tab-button`]]: true,
    [styles[`${prefix}-tab-button--active`]]: button.id === activeId,
    [styles[`${prefix}-tab-button--skeleton`]]: skeleton,
  };

  const buttonItemClassPrefix = {
    [styles[`${prefix}-tab-button-item`]]: true,
    [styles[`${prefix}-tab-button--active-item`]]: button.id === activeId,
    [styles[`${prefix}-tab-button--skeleton-item`]]: skeleton,
    [`${prefix}-tab-button-${button.id}`]: true,
  };

  const buttonClasses = classNames(className, buttonClassPrefix);

  const commonProps = {
    className: buttonClasses,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
  };

  return (
    <div {...other} {...commonProps} {...otherProps}>
      <div className={classNames(buttonItemClassPrefix)}>
        <div className={styles[`${prefix}-tab-button-text`]}>
          {button.title}
        </div>
        <div className={styles[`${prefix}-tab-button-url`]}>{button.url}</div>
      </div>
      {children && (
        <ContextMenu
          target={`${prefix}-tab-button-${button.id}`}
          position="top"
          fill={true}
          container={`${prefix}-tab-button--container`}
        >
          {children}
        </ContextMenu>
      )}
    </div>
  );
};

export default TabButton;
