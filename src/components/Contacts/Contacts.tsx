import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <nav className={styles.contacts}>
        <ul className={styles['contacts__list']}>
            <li className={styles['contacts__item']}>Адрес</li>
            <li className={styles['contacts__item']}>Telegram</li>
            <li className={styles['contacts__item']}>VK</li>
            <li className={styles['contacts__item']}>Instagram</li>
            <li className={styles['contacts__item']}>Phone</li>
        </ul>
    </nav>
  )
}

export default Contacts
