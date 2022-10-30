import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'

import Signin from 'assets/lottie_gifs/signin.gif';
import Signout from 'assets/lottie_gifs/signout.gif';

import styles from './Login.module.scss';

const Login = () => {
  const { data } = useSession();

  return (
    data ? (
      <button className={styles.loginBtn} onClick={() => signOut()}>
        <span className={styles.icon}>
          <Image className={styles.icon} src={Signout} />
        </span>
        Sign out ({data.user.name})
      </button>
    ) : (
      <button className={styles.loginBtn} onClick={() => signIn()}>
        <span className={`${styles.icon} ${styles.iconSignIn}`}>
          <Image className={styles.icon} src={Signin} />
        </span>
        Sign in
      </button>
    )
  );
}

export default Login
