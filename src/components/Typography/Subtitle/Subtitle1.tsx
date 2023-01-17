import {prefix} from '../../../settings/index';
import styles from './index.module.scss';

const Subtitle1 = ({children}: {children: React.ReactNode}) => {
  return <div className={styles[`${prefix}-subtitle--1`]}>{children}</div>;
};

export default Subtitle1;
