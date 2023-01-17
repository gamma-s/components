import {prefix} from '../../../settings/index';
import styles from './index.module.scss';

const Subtitle2 = ({children}: {children: React.ReactNode}) => {
  return <div className={styles[`${prefix}-subtitle--2`]}>{children}</div>;
};

export default Subtitle2;
