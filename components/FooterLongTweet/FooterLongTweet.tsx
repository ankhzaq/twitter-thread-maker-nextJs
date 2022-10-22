import constants from 'helpers/localizations.json';
import styles from './FooterLongTweet.module.scss';
import light from 'icons/light.png';
import Image from 'next/image'
import Spacer from 'components/Spacer/Spacer';
import Button from 'components/Button/Button';
import React, { useState } from 'react';
const FooterLongTweet = () => {
  const [endTweetOption, setEndTweetOption] = useState(1);
  const [textBeforeCut, setTextBeforeCut] = useState("");

  const changeEndTweetOption = (nextOption: number) => {
    setEndTweetOption(nextOption)
  }

  const changeBeforeCutText = (e: React.FormEvent<HTMLInputElement>) => {
    setTextBeforeCut(e.currentTarget.value);
  }

  return (
    <div>
      <Spacer className={styles.lightWrapper} marginBottom="15px">
        <Image src={light} />
        <span className={styles.spanText}>{constants.footerLongTweet.light}</span>
      </Spacer>
      <Spacer className={styles.lightWrapper} marginBottom="15px">
        <span className={styles.blueText}>{constants.footerLongTweet.endTweet1}</span>
        <Spacer marginLeft="5px" marginRight="5px">
          <Button active={endTweetOption === 1} onClick={() => changeEndTweetOption(1)} text={constants.footerLongTweet.endTweetOption1} />
        </Spacer>
        <Spacer marginRight="5px">
          <Button active={endTweetOption === 2} onClick={() => changeEndTweetOption(2)} text={constants.footerLongTweet.endTweetOption2} />
        </Spacer>
        <span className={styles.blueText}>{constants.footerLongTweet.endTweet2}</span>
      </Spacer>
      <Spacer className={styles.lightWrapper}>
        <span className={styles.blueText}>{constants.footerLongTweet.beforeCut}</span>
        <Spacer marginLeft="5px">
          <input className={styles.input} onChange={changeBeforeCutText} value={textBeforeCut} placeholder={constants.footerLongTweet.beforeCutPlaceholder} />
        </Spacer>
      </Spacer>
    </div>
  );
}

export default FooterLongTweet
