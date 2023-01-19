/**
 * @fileoverview ControllerButton component, which is used in the Controller
 * component in. Its help to show the available controller buttons for the user.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Button} from './ControllerButton.type';
import {ButtonText} from '../../Typography';
import {prefix} from '../../../settings';

import styles from './ControllerButton.module.scss';

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
  const MODIFIER = 'controller-button';

  const buttonClassPrefix = {
    [styles[`${prefix}-${MODIFIER}`]]: true,
    [styles[`${prefix}-${MODIFIER}--sm`]]: small,
    [styles[`${prefix}-${MODIFIER}--primary`]]: kind === 'primary',
    [styles[`${prefix}-${MODIFIER}--danger`]]: kind === 'danger',
    [styles[`${prefix}-${MODIFIER}--secondary`]]: kind === 'secondary',
    [styles[`${prefix}-${MODIFIER}--ghost`]]: kind === 'ghost',
    [styles[`${prefix}-${MODIFIER}--tertiary`]]: kind === 'tertiary',
    [styles[`${prefix}-${MODIFIER}--wide`]]: wide,
    [styles[`${prefix}-${MODIFIER}--disabled`]]: disabled,
    [styles[`${prefix}-${MODIFIER}--skeleton`]]: skeleton,
  };

  const nameClassPrefix = {
    [styles[`${prefix}-${MODIFIER}-name`]]: true,
    [styles[`${prefix}-${MODIFIER}--sm-name`]]: small,
    [styles[`${prefix}-${MODIFIER}--primary-name`]]: kind === 'primary',
    [styles[`${prefix}-${MODIFIER}--danger-name`]]: kind === 'danger',
    [styles[`${prefix}-${MODIFIER}--secondary-name`]]: kind === 'secondary',
    [styles[`${prefix}-${MODIFIER}--ghost-name`]]: kind === 'ghost',
    [styles[`${prefix}-${MODIFIER}--tertiary-name`]]: kind === 'tertiary',
    [styles[`${prefix}-${MODIFIER}--wide-name`]]: wide,
    [styles[`${prefix}-${MODIFIER}--disabled-name`]]: disabled,
    [styles[`${prefix}-${MODIFIER}--skeleton-name`]]: skeleton,
  };

  const descriptionClassPrefix = {
    [styles[`${prefix}-${MODIFIER}-description`]]: true,
    [styles[`${prefix}-${MODIFIER}--sm-description`]]: small,
    [styles[`${prefix}-${MODIFIER}--primary-description`]]: kind === 'primary',
    [styles[`${prefix}-${MODIFIER}--danger-description`]]: kind === 'danger',
    [styles[`${prefix}-${MODIFIER}--secondary-description`]]:
      kind === 'secondary',
    [styles[`${prefix}-${MODIFIER}--ghost-description`]]: kind === 'ghost',
    [styles[`${prefix}-${MODIFIER}--tertiary-description`]]:
      kind === 'tertiary',
    [styles[`${prefix}-${MODIFIER}--wide-description`]]: wide,
    [styles[`${prefix}-${MODIFIER}--disabled-description`]]: disabled,
    [styles[`${prefix}-${MODIFIER}--skeleton-description`]]: skeleton,
  };

  const buttonClasses = classNames(className, buttonClassPrefix);

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
        <ButtonText className={classNames(nameClassPrefix)}>
          {buttonName}
        </ButtonText>
        <ButtonText className={classNames(descriptionClassPrefix)}>
          {buttonDescription}
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
        <ButtonText className={classNames(nameClassPrefix)}>
          {buttonName}
        </ButtonText>
        <ButtonText className={classNames(descriptionClassPrefix)}>
          {buttonDescription}
        </ButtonText>
      </a>
    );
  }
};

export default ControllerButton;
