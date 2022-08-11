import { ChangeEventHandler, ReactElement, ReactNode } from 'react';

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import styles from './index.module.scss';

interface props {
  checked?: boolean;
  children?: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox = ({ checked, children, onChange }: props): ReactElement => {
  return (
    <div className={styles.box_wrapper}>
      <label className={styles.flex}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.none}
        />
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <div>{checked ? '체크됨' : '체크 안됨'}</div>
      </label>
      <span>{children}</span>
    </div>
  );
};

CheckBox.defaultProps = {
  checked: false,
  children: null,
};

export default CheckBox;
