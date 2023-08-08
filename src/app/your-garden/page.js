import styles from '../styles/your-garden.module.scss'

export default function Page() {
    return (
    <div>
        <div className={styles.header}>
            <h1 className={styles.header_quiz}> 🍐 Tell us about your plants. 🍐</h1>
            <p className={styles.header_info}>The following information will be used to help gardeners in similar climate conditions to you all over the country. This data will not be used without your permission.</p>
        </div>
        <form className={styles.form}>
            <div className={styles.form_question}>
                <label className={styles.form_label}>
                    Where do you live?</label>
                <input className={styles.form_location}
                    type="text"
                    name="city"
                    placeholder="Your City"
                />
                <input className={styles.form_location}
                    type="text"
                    name="province"
                    placeholder="Your Province/Territory"
                />
            </div>
            <div className={styles.form_question}>
                <label className={styles.form_label}>
                    What did you grow?</label>
                <input className={styles.form_plant}
                    type="text"
                    name="plant"
                    placeholder="Your Plant"
                />
            </div>
            <div className={styles.form_question}>
                <label className={styles.form_label}>
                    Did you vibe with this plant?</label>
                <div className={styles.form_vibe}>
                    <input className="sunlight__option"
                        type="radio" 
                        name="vibe"
                        value="true"
                    />
                    <p className={styles.form_vibe_label}>We did not vibe. 🥀</p>
                </div>
                <div className={styles.form_vibe}>
                    <input className="sunlight__option"
                        type="radio" 
                        name="vibe"
                        value="false"
                    />
                    <p className={styles.form_vibe_label}>Hell yeah, we vibed 🤘🏻</p>
                </div>
            </div>
            <div className={styles.form_question}>
                <label className={styles.form_label}>
                    Any wisdom to pass on?</label>
                <textarea name="review" id="review" className={styles.form_comment}/>
            </div>
        </form>
    </div>
    )
  }