import styles from './Main.module.scss';
import mainImage from '../../vendor/images/main-image.png';
import mainLogo from '../../vendor/icons/main-logo-biola.svg';

const Main = () => {
    return (
        <section className={styles.main}>
            <img className={styles['main__image']} src={mainImage} alt="main image"/>
            <img className={styles['main__logo']} src={mainLogo} alt="main logo"/>
        </section>
    )
}

export default Main
