import { useState } from 'react';
import styles from './input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const classInput = `${styles.input} ${props.className}`;
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = props.type === 'password' && showPassword ? 'text' : props.type;

  return (
    <div className={styles.inputContainer}>
      <input
        type={inputType}
        value={props.value}
        className={classInput}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.type === 'password' && (
        <button type="button" className={styles.eyeButton} onClick={togglePasswordVisibility}>
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
    </div>
  );
};

export default Input;
