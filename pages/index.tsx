import Header from 'components/Header/Header';
import 'normalize.css';
import styles from './index.module.scss';
import InputLongTweet from 'components/InputLongTweet/InputLongTweet';
import Spacer from 'components/Spacer/Spacer';
import FooterLongTweet from 'components/FooterLongTweet/FooterLongTweet';
const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <Spacer marginBottom="10px">
      <InputLongTweet />
    </Spacer>
    <FooterLongTweet />
  </div>
)

export default App
