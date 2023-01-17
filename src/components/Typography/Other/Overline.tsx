/**
 * @fileoverview The implementation of the Overline component.
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Typography} from './index.type';
import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

/**
 * Overline component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Overline component
 */
const OverlineText = ({children, className}: Typography) => {
  const overlineClassPrefix = {
    [styles[`${prefix}-overline--text`]]: true,
  };

  const overlineClasses = classNames(className, overlineClassPrefix);

  return <div className={overlineClasses}>{children}</div>;
};

export default OverlineText;
