import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET
    })
  ]
});
