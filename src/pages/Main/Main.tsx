import styles from './Main.module.scss';
import mainImage from '../../vendor/images/main-image.png';
import mainLogo from '../../vendor/icons/main-logo-biola.svg';

const Main = () => {
    return (
        <section className={styles.main}>
            <img className={styles['main__image']} src={mainImage} alt="main image"/>
            <a href="/" className={styles['main__logo-link']}>
                <img className={styles['main__logo']} src={mainLogo} alt="main logo"/>
            </a>
            {/* <article className={styles['main__article']}>
                <button className={styles['main__button']}>Записаться на обучение</button>
            </article> */}
        </section>
    )
}

export default Main;