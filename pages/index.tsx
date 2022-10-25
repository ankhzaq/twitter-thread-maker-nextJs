//components
import Header from 'components/Header/Header';
import InputLongTweet from 'components/InputLongTweet/InputLongTweet';
import Spacer from 'components/Spacer/Spacer';
import FooterLongTweet from 'components/FooterLongTweet/FooterLongTweet';
import Tweet from 'components/Tweet/Tweet';
import Login from 'components/Login/Login';

// styles
import 'normalize.css';
import styles from './index.module.scss';

// session
import { SessionProvider } from 'next-auth/react';

const App = () => (
  <SessionProvider>
    <div className={styles.appWrapper}>
      <Header />
      <Login />
      <Spacer marginBottom="10px">
        <InputLongTweet />
      </Spacer>
      <FooterLongTweet />
      <Tweet  fullName="Zaquiel Rodriguez" text="Write here the tweet as long as you want :) \nYou can indicate the end of the tweet manually with two empty lines." username="zaqMyer"/>
    </div>
  </SessionProvider>
)

export default App
