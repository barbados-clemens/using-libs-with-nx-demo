import {RLibTwo} from "@using-libs-with-jest/r-lib-two";
import styles from './r-lib-one.module.scss';

/* eslint-disable-next-line */
export interface RLibOneProps {
}

export function RLibOne(props: RLibOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RLibOne!</h1>
      <RLibTwo/>
    </div>
  );
}

export default RLibOne;
