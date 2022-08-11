import React from 'react';
import styles from './index.module.scss';

interface props {
  children: React.ReactElement | string;
}

const MyButton = ({ children }: props): React.ReactElement => {
  return (
    <button type="button" className={styles.button} aria-label="my-button">
      {children}
    </button>
  );
};

export default MyButton;
