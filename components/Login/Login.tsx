import { signIn, signOut, useSession } from 'next-auth/client';

const Login = () => {
  const [session] = useSession();

  return (
    session ? (<button onClick={() => signOut()}>Bye {session.user.name}</button>) : (<button onClick={() => signIn()}>Sign in with twitter</button>)
  );
}

export default Login
