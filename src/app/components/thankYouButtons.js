import styles from '../styles/thank-you.module.scss'
import Link from 'next/link'

export default function thankYouButtons() {

    return(
        <div className={styles.buttons}>
            <Link className={styles.buttons_link} href="/your-garden">Submit more plants</Link>
            <Link className={styles.buttons_link} href="/">Home</Link>
        </div>
    )
}