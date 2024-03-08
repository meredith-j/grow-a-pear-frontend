import styles from '../styles/thank-you.module.scss';
import ThankYouButtons from '../components/thankYouButtons';
import SubmissionMessage from '../components/submissionMessage';

export default function ThankYou () {

    return (
        <div>
            <SubmissionMessage />
            <ThankYouButtons />
        </div>
    )
}