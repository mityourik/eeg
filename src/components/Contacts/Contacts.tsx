import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <nav className={styles['contacts']}>
        <ul className={styles['contacts__list']}>
            <li className={styles['contacts__item']}>Контакты: ...</li>
            <li className={styles['contacts__item']}>О нас: ...</li>
            <li className={styles['contacts__item']}>Информация: ...</li>
            <li className={styles['contacts__item']}>О школе: ...</li>
        </ul>
    </nav>
  )
}

export default Contacts
