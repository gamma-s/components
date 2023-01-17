import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

const Body1 = ({children}: {children: React.ReactNode}) => {
  return <div className={styles[`${prefix}-body--1`]}>{children}</div>;
};

export default Body1;
