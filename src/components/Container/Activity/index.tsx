/**
 * @fileoverview Activity container component, which is used in the extension.
 */

/**
 * Module dependencies
 */

import classNames from 'classnames';
import {prefix} from '../../../settings/';
import './index.css';

/**
 * Activity container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const Activity = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [`${prefix}-activity-container`]: true,
  };

  const buttonClasses = classNames(className, containerClassPrefix);

  const commonProps = {
    className: buttonClasses,
  };

  return (
    <div {...other} {...commonProps}>
      {children}
    </div>
  );
};

/**
 * Tab container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Function} props.onClickNewTab
 * @param {Object} props.other
 * @constructor
 */
export const Tabs = ({
  children,
  className,
  onClickNewTab,
  ...other
}: React.HTMLAttributes<HTMLDivElement> & {onClickNewTab?: () => void}) => {
  const containerClassPrefix = {
    [`${prefix}-tab-container`]: true,
    [`${prefix}-tab-button-container`]: true,
  };

  const newTabClassPrefix = {
    [`${prefix}-tab-button--new-tab`]: true,
    [`${prefix}-tab-button-item`]: true,
  };

  const buttonClasses = classNames(className, containerClassPrefix);

  const commonProps = {
    className: buttonClasses,
  };

  return (
    <>
      <div {...other} {...commonProps}>
        {children}
      </div>
      <div onClick={onClickNewTab} className={classNames(newTabClassPrefix)}>
        +
      </div>
    </>
  );
};

/**
 * Apps container
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const Apps = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [`${prefix}-app-container`]: true,
  };

  const buttonClasses = classNames(className, containerClassPrefix);

  const commonProps = {
    className: buttonClasses,
  };

  return (
    <div {...other} {...commonProps}>
      {children}
    </div>
  );
};
