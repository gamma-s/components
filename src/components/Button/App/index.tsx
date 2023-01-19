/**
 * @fileoverview Kind of button component, which is used in the App component in
 * extension.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Button} from './index.type';
import {prefix} from '../../../settings';

import styles from './index.module.scss';

/**
 * AppButton component
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
 * @param {boolean} props.opened
 * @param {boolean} props.active
 * @param {string} props.buttonDescription
 * @param {string} props.buttonImage
 * @param {Object} props.other
 * @constructor
 */
const AppButton = ({
  children,
  className,
  disabled,
  skeleton,
  small,
  kind,
  href,
  tabIndex,
  type,
  opened,
  active,
  buttonDescription,
  buttonImage,
  ...other
}: Button) => {
  const buttonClassPrefix = {
    [styles[`${prefix}-app-button`]]: true,
    [styles[`${prefix}-app-button--sm`]]: small,
    [styles[`${prefix}-app-button--primary`]]: kind === 'primary',
    [styles[`${prefix}-app-button--danger`]]: kind === 'danger',
    [styles[`${prefix}-app-button--secondary`]]: kind === 'secondary',
    [styles[`${prefix}-app-button--ghost`]]: kind === 'ghost',
    [styles[`${prefix}-app-button--tertiary`]]: kind === 'tertiary',
    [styles[`${prefix}-app-button--disabled`]]: disabled,
    [styles[`${prefix}-app-button--skeleton`]]: skeleton,
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
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <div className={styles[`${prefix}-app-button--image`]}>
            <img src={buttonImage} alt={buttonDescription} />
          </div>
        )}
        {opened && (
          <div className={styles[`${prefix}-app-button--opened`]}></div>
        )}
        {active && (
          <div className={styles[`${prefix}-app-button--active`]}></div>
        )}
      </button>
    );
  } else {
    // If href is provided, render an anchor tag
    const anchorProps = {
      role: 'button',
      href,
      alt: 'buttonDescription',
    };

    return (
      <a {...other} {...anchorProps} {...commonProps} {...otherProps}>
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <div className={styles[`${prefix}-app-button--image`]}>
            <img src={buttonImage} alt={buttonDescription} />
          </div>
        )}
        {opened && (
          <div className={styles[`${prefix}-app-button--opened`]}></div>
        )}
        {active && (
          <div className={styles[`${prefix}-app-button--active`]}></div>
        )}
      </a>
    );
  }
};

export default AppButton;
