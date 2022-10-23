// images
import copy from 'icons/copy.png';
import heart from 'icons/heart.png';
import logoTwitter from 'icons/logoTwitter.png';
import retweet from 'icons/retweet.png';
import speechBubble from 'icons/speech-bubble.png';
import upload from 'icons/upload.png';
import Image from 'next/image'
import styles from './tweet.module.scss';
import Spacer from 'components/Spacer/Spacer';

interface Props {
  fullName: string;
  text: string;
  username: string;
}

const Tweet = ({ fullName, text, username }: Props) => {
  const getTweetDate = () => {
    const [_, month, number, ...rest] = String(new Date()).split(' ');
    return (`${month} ${number}`);
  }
  return (
    <div className={styles.tweetWrapper}>
      <div className={styles.logoAndLine}>
        <div className={styles.logo}>
          <Image src={logoTwitter} />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.fullName}>{fullName}</span>
          <span className={styles.grey}>@{username}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.grey}>{getTweetDate()}</span>
        </div>
        <div className={`${styles.logo} ${styles.logoCopy}`}>
          <Image src={copy} />
        </div>
      </div>
      <div>
        <span className={styles.line}/>
        <div>{text}</div>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Image src={speechBubble} />
          </div>
          <div className={styles.icon}>
            <Image src={retweet} />
          </div>
          <div className={styles.icon}>
            <Image src={heart} />
          </div>
          <div className={styles.icon}>
            <Image src={upload} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet
