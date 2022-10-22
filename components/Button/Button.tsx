import constants from 'helpers/localizations.json';
import styles from './button.module.scss';

interface Props {
  active?: boolean;
  text?: string;
  onClick: () => void;
}

const Button = ({ active, onClick, text }: Props) => {
  const btnClass = styles.button;
  const activeClass = active ? styles.active : styles.inactive;
  return (
    <button className={`${btnClass} ${activeClass}`} onClick={onClick}>{text}</button>
  );
}

export default Button
