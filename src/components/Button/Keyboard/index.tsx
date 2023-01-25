/**
 * @fileoverview Virtual keyboard button component.
 */

/**
 * Module dependencies
 */
import {classPrefix} from '../../../helpers';

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
  const classNames = new classPrefix(styles, 'keyboard-button');

  const container = classNames.create(
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
    className
  );

  const commonProps = {
    className: container,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
  };

  const altProps = {
    className: classNames.action('alt'),
  };

  const keyProps = {
    className: classNames.action('key'),
  };

  return (
    <button {...other} {...commonProps} {...otherProps}>
      {alt && <span {...altProps}>{alt}</span>}
      <span {...keyProps}>{keyCap || children}</span>
    </button>
  );
};

export default KeyboardButton;
