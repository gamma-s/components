/**
 * @fileoverview Virtual keyboard button component.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {prefix} from '../../../settings';

import styles from './index.module.scss';
import {Button} from './index.type';

const KeyboardButton = ({
  children,
  className,
  disabled,
  skeleton,
  tabIndex,
  type,
  alt,
  keyCap,
  column,
  ...other
}: Button & React.HTMLAttributes<HTMLButtonElement>) => {
  const modifier = 'keyboard-button';
  const buttonClassPrefix = {
    [styles[`${prefix}-${modifier}`]]: true,
    [styles[`${prefix}-${modifier}-caps`]]: type === 'caps',
    [styles[`${prefix}-${modifier}-shift`]]: type === 'shift',
    [styles[`${prefix}-${modifier}-tab`]]: type === 'tab',
    [styles[`${prefix}-${modifier}-backspace`]]: type === 'backspace',
    [styles[`${prefix}-${modifier}-space`]]: type === 'space',
    [styles[`${prefix}-${modifier}-arrow-left`]]: type === 'arrow-left',
    [styles[`${prefix}-${modifier}-arrow-right`]]: type === 'arrow-right',
    [styles[`${prefix}-${modifier}-lang`]]: type === 'lang',
    [styles[`${prefix}-${modifier}-paste`]]: type === 'paste',
    [styles[`${prefix}-${modifier}-close-keyboard`]]: type === 'close-keyboard',
    [styles[`${prefix}-${modifier}-enter`]]: type === 'enter',
    [styles[`${prefix}-${modifier}-skeleton`]]: skeleton,
    [styles[`${prefix}-${modifier}-disabled`]]: disabled,
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
    <button {...other} {...commonProps} {...otherProps}>
      {alt && (
        <span className={styles[`${prefix}-${modifier}-alt`]}>{alt}</span>
      )}
      <span className={styles[`${prefix}-${modifier}-key`]}>
        {keyCap || children}
      </span>
    </button>
  );
};

export default KeyboardButton;
