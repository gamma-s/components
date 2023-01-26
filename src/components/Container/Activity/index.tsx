/**
 * @fileoverview Activity container component, which is used in the extension.
 */

/**
 * Module dependencies
 */

import classNames from 'classnames';
import {prefix} from '../../../settings/';
import styles from './index.module.scss';

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
    [styles[`${prefix}-activity-container`]]: true,
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
    [styles[`${prefix}-tab-container`]]: true,
    [styles[`${prefix}-tab-button-container`]]: true,
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
    [styles[`${prefix}-app-container`]]: true,
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
