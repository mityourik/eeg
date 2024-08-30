import styles from './About.module.scss';

const About = () => {
  return (
    <nav className={styles.about}>
        <ul className={styles['about__list']}>
            <li className={styles['about__item']}>Наши проекты</li>
            <li className={styles['about__item']}>Выпускники</li>
            <li className={styles['about__item']}>Фото</li>
        </ul>
    </nav>
  )
}

export default About
