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
 * Keyboard container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const KeyboardContainer = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-keyboard-wrapper`]]: true,
  };

  const buttonClasses = classNames(className, containerClassPrefix);

  const commonProps = {
    className: buttonClasses,
  };

  return (
    <div {...other} {...commonProps}>
      <div className={styles[`${prefix}-keyboard-wrapper--container`]}>
        {children}
      </div>
    </div>
  );
};

/**
 * Keyboard row container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const KeyboardRow = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerClassPrefix = {
    [styles[`${prefix}-keyboard-row`]]: true,
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
 * Keyboard grid container
 * @param {Object} props
 * @param {boolean} props.opened
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
export const KeyboardGrid = ({
  opened,
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement> & {opened?: boolean}) => {
  const containerClassPrefix = {
    [styles[`${prefix}-keyboard-grid`]]: true,
    [styles[`${prefix}-keyboard-grid--opened`]]: opened,
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
