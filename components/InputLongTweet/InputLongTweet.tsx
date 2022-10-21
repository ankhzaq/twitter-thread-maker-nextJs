import constants from 'helpers/localizations.json';
import styles from './InputLongTweet.module.scss';
import { useState } from 'react';

const InputLongTweet = () => {
  const [text, setText] = useState(constants.inputLongTweet);

  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <textarea className={styles.input} value={text} onChange={onChange} />
    </div>
  );
}

export default InputLongTweet
