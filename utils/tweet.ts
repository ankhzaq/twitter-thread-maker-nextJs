export const LIMIT_CHARACTERS = 150;
const MANUAL_SEPARATOR = '\n\n\n';

export const tweetDivision = (longTweet: string, totalTweets: string[]) => {
  const textLimited = longTweet.substring(0, 150);
  const indexDoubleEmptyLine = longTweet.substring(0, 150).indexOf(MANUAL_SEPARATOR);
  const manualDivisionFound = indexDoubleEmptyLine > 0;

  // case 0
  if (!longTweet.length) return totalTweets;

  // case manual division
  if (manualDivisionFound) {
    const tweet = textLimited.substring(0, indexDoubleEmptyLine);
    const restTweet = longTweet.substring(tweet.length + MANUAL_SEPARATOR.length,);
    totalTweets.push(tweet);
    return tweetDivision(restTweet, totalTweets);
  }

  // case small longTweet
  if (longTweet && longTweet.length < LIMIT_CHARACTERS) {
    totalTweets.push(longTweet);
    return tweetDivision('', totalTweets);
  }

  // case division by dot...
  const lastDot = textLimited.lastIndexOf('.');
  const dotFound = lastDot >= 0;

  if (dotFound) {
    const tweet = textLimited.substring(0, lastDot + 1);
    const restTweet = longTweet.substring(tweet.length,);
    totalTweets.push(longTweet);
    return tweetDivision(restTweet, totalTweets);
  }

  return totalTweets;
}
