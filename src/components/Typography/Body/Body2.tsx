import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

const Body2 = ({children}: {children: React.ReactNode}) => {
  return <div className={styles[`${prefix}-body--2`]}>{children}</div>;
};

export default Body2;
