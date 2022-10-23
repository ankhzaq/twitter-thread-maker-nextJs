import Header from 'components/Header/Header';
import 'normalize.css';
import styles from './index.module.scss';
import InputLongTweet from 'components/InputLongTweet/InputLongTweet';
import Spacer from 'components/Spacer/Spacer';
import FooterLongTweet from 'components/FooterLongTweet/FooterLongTweet';
import Tweet from 'components/Tweet/Tweet';
const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <Spacer marginBottom="10px">
      <InputLongTweet />
    </Spacer>
    <FooterLongTweet />
    <Tweet  fullName="Zaquiel Rodriguez" text="Write here the tweet as long as you want :) \nYou can indicate the end of the tweet manually with two empty lines." username="zaqMyer"/>
  </div>
)

export default App
