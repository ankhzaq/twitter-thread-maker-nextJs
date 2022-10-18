import constants from 'helpers/localizations.json';
import styles from './header.module.scss';
const Header = () => (
  <>
    <div className={styles.title}>{constants.header.title}</div>
    <div className={styles.subtitle}>{constants.header.subtitle}</div>
  </>
)

export default Header
