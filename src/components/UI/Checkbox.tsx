import React from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const classCheckbox = `${styles.checkboxContainer} ${props.className}`;
  return (
    <label className={classCheckbox}>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      <span className={styles.checkmark}></span>
      {props.label}
    </label>
  );
};

export default Checkbox;
