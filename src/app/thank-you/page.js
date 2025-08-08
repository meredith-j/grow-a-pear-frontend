import styles from '../styles/thank-you.module.scss';
import ThankYouButtons from '../components/ThankYouButtons';
import SubmissionMessage from '../components/SubmissionMessage';

export default function ThankYou () {

    return (
        <div>
            <SubmissionMessage />
            <ThankYouButtons />
        </div>
    )
}