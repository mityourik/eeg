import { useState } from 'react';
import mainLogo from '../../vendor/icons/main-logo-biola.svg';
import styles from './Header.module.scss';

interface HeaderProps {
  onMenuSelect: (index: number | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuSelect }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const newIndex = activeIndex === index ? null : index;
    setActiveIndex(newIndex);
    onMenuSelect(newIndex);
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles['main__logo-link']}>
        <img className={styles['main__logo']} src={mainLogo} alt="main logo" />
      </a>
      <nav className={styles['header__nav']}>
        <ul className={styles.navList}>
          {['Контакты', 'О нас', 'Информация', 'О школе'].map((item, index) => (
            <li
              key={index}
              className={`${styles.navItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;