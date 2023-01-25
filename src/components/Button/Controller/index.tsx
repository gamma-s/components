/**
 * @fileoverview ControllerButton component, which is used in the Controller
 * component in. Its help to show the available controller buttons for the user.
 */

/**
 * Module dependencies
 */
import {Button} from './index.type';
import {ButtonText} from '../../Typography';
import {classPrefix} from '../../../helpers';

import styles from './index.module.scss';

/**
 * Controller Button component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {boolean} props.small
 * @param {string} props.kind
 * @param {string} props.href
 * @param {number} props.tabIndex
 * @param {string} props.type
 * @param {string} props.buttonDescription
 * @param {string} props.buttonName
 * @param {Object} props.other
 * @constructor
 */
const ControllerButton = ({
  className,
  disabled,
  skeleton,
  small,
  kind,
  href,
  tabIndex,
  type,
  wide,
  buttonDescription,
  buttonName,
  ...other
}: Button) => {
  const classNames = new classPrefix(styles, 'controller-button');

  const buttonClassPrefix = classNames.create({
    sm: small,
    primary: kind === 'primary',
    danger: kind === 'danger',
    secondary: kind === 'secondary',
    ghost: kind === 'ghost',
    tertiary: kind === 'tertiary',
    wide: wide,
    disabled: disabled,
    skeleton: skeleton,
  });

  const names = classNames.create({
    name: true,
    'sm-name': small,
    'primary-name': kind === 'primary',
    'danger-name': kind === 'danger',
    'secondary-name': kind === 'secondary',
    'ghost-name': kind === 'ghost',
    'tertiary-name': kind === 'tertiary',
    'wide-name': wide,
    'disabled-name': disabled,
    'skeleton-name': skeleton,
  });

  const descriptions = classNames.create({
    description: true,
    'sm-description': small,
    'primary-description': kind === 'primary',
    'danger-description': kind === 'danger',
    'secondary-description': kind === 'secondary',
    'ghost-description': kind === 'ghost',
    'tertiary-description': kind === 'tertiary',
    'wide-description': wide,
    'disabled-description': disabled,
    'skeleton-description': skeleton,
  });

  const commonProps = {
    className: buttonClassPrefix,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
    type,
  };

  if (typeof href === 'undefined') {
    return (
      <button {...other} {...commonProps} {...otherProps}>
        <ButtonText className={names}>{buttonName}</ButtonText>
        <ButtonText className={descriptions}>{buttonDescription}</ButtonText>
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
        <ButtonText className={names}>{buttonName}</ButtonText>
        <ButtonText className={descriptions}>{buttonDescription}</ButtonText>
      </a>
    );
  }
};

export default ControllerButton;
