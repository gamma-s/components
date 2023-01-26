/**
 * @fileoverview Gamma extension container component, which is used in the
 * extension.
 */

/**
 * Module dependencies
 */
import {classPrefix} from '../../../helpers';
import styles from './index.module.scss';

/**
 * Gamma container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
const Gamma = ({
  children,
  className,
  opened,
  ...other
}: React.HTMLAttributes<HTMLDivElement> & {opened: boolean}) => {
  const classNames = new classPrefix(styles, 'gamma');

  const container = classNames.create(
    {
      opened: opened,
    },
    className
  );

  const commonProps = {
    className: container,
  };

  return (
    <div {...other} {...commonProps}>
      <div className={classNames.action('content')}>{children}</div>
    </div>
  );
};

/**
 * Gamma root container
 * @param {Object} props
 * @param {React.ReactElement} props.children
 * @param {string} props.className
 * @param {Object} props.other
 * @constructor
 */
const GammaRoot = ({
  children,
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
  const classNames = new classPrefix(styles, 'root');

  const container = classNames.create({}, className);

  const commonProps = {
    className: container,
  };

  return (
    <div {...other} {...commonProps}>
      {children}
    </div>
  );
};

export {Gamma, GammaRoot};
