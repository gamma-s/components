/**
 * @fileoverview Virtual keyboard button component.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';
import {classPrefix} from '../../../helpers';

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
  const container = classPrefix(styles, 'keyboard-button', [
    {
      caps: type === 'caps',
      shift: type === 'shift',
      tab: type === 'tab',
      space: type === 'space',
      lang: type === 'lang',
      paste: type === 'paste',
      enter: type === 'enter',
      backspace: type === 'backspace',
      'close-keyboard': type === 'close-keyboard',
      'arrow-left': type === 'arrow-left',
      'arrow-right': type === 'arrow-right',
      skeleton: skeleton,
      disabled: disabled,
    },
  ]);

  const commonProps = {
    className: classNames(className, container),
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
  };

  const altProps = {
    className: classNames(classPrefix(styles, 'keyboard-button-alt')),
  };

  const keyProps = {
    className: classNames(classPrefix(styles, 'keyboard-button-key')),
  };

  return (
    <button {...other} {...commonProps} {...otherProps}>
      {alt && <span {...altProps}>{alt}</span>}
      <span {...keyProps}>{keyCap || children}</span>
    </button>
  );
};

export default KeyboardButton;
