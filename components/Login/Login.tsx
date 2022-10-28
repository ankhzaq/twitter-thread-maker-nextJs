import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data } = useSession();

  return (
    data ? (
      <button onClick={() => signOut()}>Sign out {data.user.name}</button>
    ) : (
      <button onClick={() => signIn()}>Sign in with twitter</button>
    )
  );
}

export default Login
