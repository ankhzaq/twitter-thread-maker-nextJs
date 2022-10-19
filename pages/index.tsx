import Header from 'components/Header/Header';
import 'normalize.css';
import styles from './index.module.scss';
import Button from 'components/Button/Button';
const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <Button active text="button" />
  </div>
)

export default App
