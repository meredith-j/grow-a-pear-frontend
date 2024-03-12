import Form from '../components/form';
import styles from '../styles/your-garden.module.scss';
import TestRadioButtons from '../components/testRadioButtons';

export default function Page() {

    return (
    <>
        <div className={styles.header}>
            <h1 className={styles.header_quiz}> 🍐 Tell us about your plants. 🍐</h1>
            <p className={styles.header_info}>The following information will be used to help gardeners in similar climate conditions to you all over the country. This data will not be used without your permission. </p>
        </div>
        <Form />
        {/* <TestRadioButtons /> */}
    </>
    )
  }