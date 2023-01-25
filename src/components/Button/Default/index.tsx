/**
 * @fileoverview The implementation of the HTML Button element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */

/**
 * Module dependencies
 */
import {ButtonText} from '../../Typography';
import {IButton} from './index.type';
import {classPrefix} from '../../../helpers';

import styles from './index.module.scss';

const Button = ({
  className,
  disabled,
  skeleton,
  small,
  kind,
  href,
  tabIndex,
  type,
  children,
  ...other
}: IButton) => {
  const classNames = new classPrefix(styles, 'button');

  const buttonClasses = classNames.create(
    {
      sm: small,
      primary: kind === 'primary',
      danger: kind === 'danger',
      secondary: kind === 'secondary',
      ghost: kind === 'ghost',
      tertiary: kind === 'tertiary',
      context: kind === 'context',
      disabled: disabled,
      skeleton: skeleton,
    },
    className
  );

  const commonProps = {
    className: buttonClasses,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
    type,
  };

  if (typeof href === 'undefined') {
    return (
      <button {...other} {...commonProps} {...otherProps}>
        <ButtonText className={classNames.action('text')}>
          {children}
        </ButtonText>
      </button>
    );
  } else {
    // If href is provided, render an anchor tag
    const anchorProps = {
      role: 'button',
      href,
    };

    return (
      <a {...other} {...anchorProps} {...commonProps} {...otherProps}>
        <ButtonText className={classNames.action('text')}>
          {children}
        </ButtonText>
      </a>
    );
  }
};

export default Button;
