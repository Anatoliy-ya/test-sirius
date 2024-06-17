import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  type: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classButton = `${styles.button} ${props.className}`;
  return (
    <div>
      <button className={classButton} onClick={props.onClick} type={props.type}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
