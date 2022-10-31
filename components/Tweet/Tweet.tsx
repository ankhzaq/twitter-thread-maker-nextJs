import { useSession } from 'next-auth/react';
// images
import copy from 'icons/copy.png';
import heart from 'icons/heart.png';
import logoTwitter from 'icons/logoTwitter.png';
import retweet from 'icons/retweet.png';
import speechBubble from 'icons/speech-bubble.png';
import upload from 'icons/upload.png';
import Image from 'next/image'
import styles from './tweet.module.scss';

interface Props {
  fullName: string;
  text: string;
  username: string;
}

const Tweet = ({ fullName, text, username }: Props) => {
  const { data } = useSession();
  const getTweetDate = () => {
    const [_, month, number, ...rest] = String(new Date()).split(' ');
    return (`${month} ${number}`);
  }

  const copyTweet = () => navigator.clipboard.writeText(text);

  return (
    <div className={styles.tweetWrapper}>
      <div className={styles.flexWrapper}>
        <div className={styles.logo}>
          { data ? (
            <img src={data?.user.image} alt="profile image" />
          ) : (
            <Image src={logoTwitter} />
          )}
        </div>
        <div className={styles.userInfo}>
          <span className={styles.fullName}>{data?.user.name}</span>
          <span className={styles.grey}>@{username}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.grey}>{getTweetDate()}</span>
        </div>
        <button className={styles.logoCopy} onClick={copyTweet}>
          <Image src={copy} />
        </button>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.lineWrapper}>
          <div className={styles.line}/>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.text}>{text}</div>
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
    </div>
  );
}

export default Tweet
