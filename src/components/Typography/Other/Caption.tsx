/**
 * @fileoverview The implementation of the HTML Caption element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Typography} from './index.type';
import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

/**
 * Caption component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Caption component
 */
const CaptionText = ({children, className}: Typography) => {
  const captionClassPrefix = {
    [styles[`${prefix}-caption--text`]]: true,
  };

  const captionClasses = classNames(className, captionClassPrefix);

  return <div className={captionClasses}>{children}</div>;
};

export default CaptionText;
