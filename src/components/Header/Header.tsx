import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header className={styles.header}>
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
