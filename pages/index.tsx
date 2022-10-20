import Header from 'components/Header/Header';
import 'normalize.css';
import styles from './index.module.scss';
import Button from 'components/Button/Button';
import InputLongTweet from 'components/InputLongTweet/InputLongTweet';
const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <InputLongTweet />
    <Button active text="button" />
  </div>
)

export default App
