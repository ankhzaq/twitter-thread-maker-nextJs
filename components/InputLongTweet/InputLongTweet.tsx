import styles from './InputLongTweet.module.scss';

interface Props {
  text: string;
  onChange: (e) => void
}

const InputLongTweet = ({ text, onChange }) => {
  return (
    <div>
      <textarea className={styles.input} value={text} onChange={onChange} />
    </div>
  );
}

export default InputLongTweet
