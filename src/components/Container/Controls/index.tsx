/**
 * @fileoverview This component is helped to see available buttons in the
 * controller.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';
import {prefix} from '../../../settings/';
import styles from './index.module.scss';

/**
 * Controls container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const Controls = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-controller-container`]]: true,
  };

  const buttonClasses = classNames(className, containerClassPrefix);

  const commonProps = {
    className: buttonClasses,
  };

  return (
    <div className={styles[`${prefix}-controller-wrapper`]}>
      <div {...other} {...commonProps}>
        {children}
      </div>
    </div>
  );
};

/**
 * Control Left container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const ControlsLeft = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-controller-container--left`]]: true,
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
 * Control Right container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const ControlsRight = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-controller-container--right`]]: true,
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
 * App control container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const AppControls = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-controller-app`]]: true,
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
