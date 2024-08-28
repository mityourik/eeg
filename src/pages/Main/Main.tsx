import { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import mainImage from '../../vendor/images/main-image.png';
import Contacts from '../../components/Contacts/Contacts';

interface MainProps {
  activeMenuIndex: number | null;
}

const Main: React.FC<MainProps> = ({ activeMenuIndex }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (activeMenuIndex !== null) {
      setIsMenuVisible(true);
    } else {
      setTimeout(() => setIsMenuVisible(false), 500);
    }
  }, [activeMenuIndex]);

  return (
    <section className={styles.main}>
      <img className={styles['main__image']} src={mainImage} alt="main image" />

      <div
        className={`${styles.menu} ${
          activeMenuIndex === null ? styles.closing : ''
        } ${isMenuVisible ? styles.open : ''}`}
      >
        <span className={styles['menu__close-button']} onClick={() => setIsMenuVisible(false)}/>
        {activeMenuIndex === 0 && <Contacts />}
        {activeMenuIndex === 1 && <p>О нас: ...</p>}
        {activeMenuIndex === 2 && <p>Информация: ...</p>}
        {activeMenuIndex === 3 && <p>О школе: ...</p>}
      </div>
    </section>
  );
}

export default Main;