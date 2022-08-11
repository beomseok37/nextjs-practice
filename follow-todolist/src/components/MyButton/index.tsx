import React, { MouseEventHandler } from 'react';

import classNames from 'classnames';
import styles from './index.module.scss';

interface props {
  children: React.ReactElement | string;
  size?: 'large' | 'normal' | 'small';
  color?: 'blue' | 'gray' | 'pink';
  outline?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseMove?: MouseEventHandler<HTMLButtonElement>;
}

const MyButton = ({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}: props): React.ReactElement => {
  return (
    <button
      type="button"
      className={classNames(
        styles.my_button,
        styles[`${size}`],
        styles[`${color}`],
        outline && styles.outline,
        fullWidth && styles.fullWidth
      )}
      aria-label="my-button"
      {...rest}
    >
      {children}
    </button>
  );
};

MyButton.defaultProps = {
  size: 'medium',
  color: 'blue',
  outline: false,
  fullWidth: false,
  onClick: () => {},
  onMouseMove: () => {},
};

export default MyButton;
