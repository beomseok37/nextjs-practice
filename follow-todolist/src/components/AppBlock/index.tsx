import React, { ReactElement } from 'react';

import styles from './index.module.scss';

interface props {
  children: ReactElement;
}

const AppBlock = ({ children }: props): React.ReactElement => {
  return <div className={styles.app_block}>{children}</div>;
};

export default AppBlock;
