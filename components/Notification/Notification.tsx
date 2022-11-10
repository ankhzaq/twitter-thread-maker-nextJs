import Image from 'next/image';
import Info from '../../assets/icons/info.png';
import styles from './Notification.module.scss';

const Notification = () => (
  <div className={styles.notification}>
    <Image src={Info} />
    <span className={styles.text}>Notification example</span>
  </div>
)

export default Notification
