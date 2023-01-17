/**
 * @fileoverview The implementation of the Button text element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Typography} from './index.type';
import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

/**
 * ButtonText component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} ButtonText component
 */
const ButtonText = ({children, className}: Typography) => {
  const buttonClassPrefix = {
    [styles[`${prefix}-button--text`]]: true,
  };

  const buttonClasses = classNames(className, buttonClassPrefix);

  return <div className={buttonClasses}>{children}</div>;
};

export default ButtonText;
