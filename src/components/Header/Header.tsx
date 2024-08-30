import mainLogo from '../../vendor/icons/main-logo-biola.svg';
import styles from './Header.module.scss';

interface HeaderProps {
  onMenuSelect: (index: number | null) => void;
  activeMenuIndex: number | null; // Добавляем активный индекс из внешнего состояния
}

const Header: React.FC<HeaderProps> = ({ onMenuSelect, activeMenuIndex }) => {
  const handleClick = (index: number) => {
    const newIndex = activeMenuIndex === index ? null : index;
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
              className={`${styles.navItem} ${
                activeMenuIndex === index ? styles.active : ''
              }`}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;