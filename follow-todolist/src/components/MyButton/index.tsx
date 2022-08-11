import React from 'react';

import classNames from 'classnames';
import styles from './index.module.scss';

interface props {
  children: React.ReactElement | string;
  size?: 'large' | 'normal' | 'small';
  color?: 'blue' | 'gray' | 'pink';
  outline?: boolean;
}

const MyButton = ({
  children,
  size,
  color,
  outline,
}: props): React.ReactElement => {
  return (
    <button
      type="button"
      className={classNames(
        styles.my_button,
        styles[`${size}`],
        styles[`${color}`],
        outline && styles.outline
      )}
      aria-label="my-button"
    >
      {children}
    </button>
  );
};

MyButton.defaultProps = {
  size: 'medium',
  color: 'blue',
  outline: false,
};

export default MyButton;
