import { useSession } from 'next-auth/react';
import { tweetDivision } from '../utils/tweet';
import { useState } from 'react';
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
import constants from 'helpers/localizations.json';

const App = () => {
  const [text, setText] = useState(constants.inputLongTweet);
  const { data } = useSession();
  const tweets = tweetDivision(text, []);

  console.log(data);

  return (
    <div className={styles.appWrapper}>
      <div className={styles.headerWrapper}>
        <Header />
        <Login />
      </div>
      <Spacer marginBottom="10px">
        <InputLongTweet onChange={(e) => setText(e.target.value)} text={text} />
      </Spacer>
      <FooterLongTweet />
      {
        tweets.map((tweet, index) => (
          <div key={index}>
            <Tweet fullName="Zaquiel Rodriguez" text={tweet} username="zaqMyer"/>
          </div>
        ))
      }
    </div>
  );
}

export default App
