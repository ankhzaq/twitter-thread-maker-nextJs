import Header from 'components/Header/Header';
import 'normalize.css';
import styles from './index.module.scss';
import Button from 'components/Button/Button';
import InputLongTweet from 'components/InputLongTweet/InputLongTweet';
import Spacer from 'components/Spacer/Spacer';
const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <Spacer marginBottom="10px">
      <InputLongTweet />
    </Spacer>
    <Button active text="button" />
  </div>
)

export default App
