import styles from '../styles/thank-you.module.scss'

export default function SubmissionMessage() {

    return(
        <div className={styles.submission_success}>
            <h1 className={styles.submission_heading}>Thanks for submitting 💖</h1>
            <p className={styles.submission_copy}>Now sit back and relax while this platform grows. 🌱</p>
            <p className={styles.submission_copy}>In the meantime, feel free to submit as many plants as you want! Every submission helps us build a database of trustworthy garden knowledge for gardeners all over Canada. 🙋🙋‍♂️🙋‍♀️</p>
            <p className={styles.submission_copy}>We'll let you know as soon as Grow a Pear has bloomed. 🌸</p>
        </div>
    )
}