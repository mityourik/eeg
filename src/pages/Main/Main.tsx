import { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import mainImage from '../../vendor/images/main-image.png';
import Contacts from '../../components/Contacts/Contacts';
import About from '../../components/About/About';

interface MainProps {
  activeMenuIndex: number | null;
  onMenuSelect: (index: number | null) => void;
}

const Main: React.FC<MainProps> = ({ activeMenuIndex, onMenuSelect }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (activeMenuIndex !== null) {
      setIsMenuVisible(true);
    } else {
      setTimeout(() => setIsMenuVisible(false), 500);
    }
  }, [activeMenuIndex]);

  const handleCloseMenu = () => {
    setIsMenuVisible(false);
    onMenuSelect(null);
  };

  return (
    <section className={styles.main}>
      <img className={styles['main__image']} src={mainImage} alt="main image" />

      <div
        className={`${styles.menu} ${
          activeMenuIndex === null ? styles.closing : ''
        } ${isMenuVisible ? styles.open : ''}`}
      >
        <span
          className={styles['menu__close-button']}
          onClick={handleCloseMenu}
        />
        {activeMenuIndex === 0 && <Contacts />}
        {activeMenuIndex === 1 && <About />}
        {activeMenuIndex === 2 && <p>Информация: ...</p>}
        {activeMenuIndex === 3 && <p>О школе: ...</p>}
      </div>
    </section>
  );
};

export default Main;