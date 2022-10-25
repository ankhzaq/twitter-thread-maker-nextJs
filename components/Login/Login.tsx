import { signIn, signOut, useSession, } from 'next-auth/react';
import { useEffect } from 'react';

const Login = () => {
  const { data } = useSession();

  if (process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY) {
    debugger;
  } else {
    debugger;
  }

  const signInWithTwitter = () => {
    debugger;
    if (!data) {
      signIn();
    }
  }
  return (
    <button onClick={signInWithTwitter}>Sign in with twitter</button>
  );
}

export default Login
