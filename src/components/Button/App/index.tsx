/**
 * @fileoverview Kind of button component, which is used in the App component in
 * extension.
 */

/**
 * Module dependencies
 */
import {Button} from './index.type';
import {classPrefix} from '../../../helpers';

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
  const classNames = new classPrefix(styles, 'app-button');

  const buttonClasses = classNames.create(
    {
      sm: small,
      primary: kind === 'primary',
      danger: kind === 'danger',
      secondary: kind === 'secondary',
      ghost: kind === 'ghost',
      tertiary: kind === 'tertiary',
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
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <div className={classNames.action('image')}>
            <img src={buttonImage} alt={buttonDescription} />
          </div>
        )}
        {opened && <div className={classNames.action('opened')}></div>}
        {active && <div className={classNames.action('active')}></div>}
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
          <div className={classNames.action('image')}>
            <img src={buttonImage} alt={buttonDescription} />
          </div>
        )}
        {opened && <div className={classNames.action('opened')}></div>}
        {active && <div className={classNames.action('active')}></div>}
      </a>
    );
  }
};

export default AppButton;
