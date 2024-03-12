"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {

    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [plantData, setPlantData] = useState([{plant:"", vibe: "", review: ""}]);
    const router = useRouter();

    // retrieve location data from local storage
    useEffect(() => {
          let city = localStorage.getItem('city');
          let province = localStorage.getItem('province');
          let email = localStorage.getItem('email');

          if (!city && !email || !province && !email) {
            setCity("")
            setProvince("")
            setEmail("")
          }

            else if (!city || !province) {
                setCity("")
                setProvince("")
            }

            else {
                setCity(city);
                setProvince(province)
                setEmail(email)
                }
        }, [])

    // add form fields
    const addPlant = () => {
        let newPlant = {plant:"", vibe: "", review: ""};
        setPlantData([...plantData, newPlant])
    }

    // remove form fields
    const removePlant = (i) => {
        let plantList = [...plantData];
        plantList.splice(i, 1);
        setPlantData(plantList)
    }

    // form update
    const handleFormChange = (event, index) => {
        event.preventDefault();

        let data = [...plantData];
        data[index][event.target.name] = event.target.value;
        setPlantData(data)
        
    }
    
    // form submission (new)
    const handleOnSubmit = (e) => {
        e.preventDefault();

            console.log(plantData)

            localStorage.setItem('city', city);
            localStorage.setItem('province', province);
            localStorage.setItem('email', email);

            axios
                .post(`http://localhost:8080/plant`, {city:city, province:province, plants:plantData, email:email})
                .then(() => {
                    // navigate to thank you page 
                    router.push('/thank-you')
                })
                .catch((err) => {
                console.log(err);
                });
                    router.push('/thank-you')
    }

    return (
    <div className={styles.form_main}>
        <form className={styles.form}
            onSubmit={handleOnSubmit}>
                <div className={`${styles.form_question}  ${styles.form_location_question}`}>
                    <label className={styles.form_label} htmlFor="city and province">
                        Where do you live?</label>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && city === "" ? styles.form_error : ""}`}>!</p>
                        <input required className={`${styles.form_location} ${styles.form_input}`}
                            type="text"
                            name="city"
                            id="city and province"
                            placeholder="Your City"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value)}}
                        />
                    </div>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && province === "" ? styles.form_error : ""}`}>!</p>
                        <input required className={`${styles.form_location} ${styles.form_input}`}
                            type="text"
                            name="province"
                            placeholder="Your Province/Territory"
                            value={province}
                            onChange={(e) => {
                                setProvince(e.target.value)}}
                        />
                    </div>
                </div>
                {plantData.map((plant, i) => {
                    return (
                        <div key={i} className={styles.form_border}>
                            <p className={styles.form_plant_heading}>{`Plant #${i+1}: ${plant.plant}`}</p>
                            <section className={styles.form_question_tablet}>
                                <div className={styles.form_question}>
                                    <label className={styles.form_label} htmlFor={`Plant #${i+1}`}>
                                        What did you grow?</label>
                                    <div className={styles.form_validation}>
                                        <p className={`${styles.form_no_error} ${!isValid && plant.plant === "" ? styles.form_error : ""}`}>!</p>
                                        <input required className={`${styles.form_plant} ${styles.form_input}`}
                                            type="text"
                                            name="plant"
                                            id={`Plant #${i+1}`}
                                            placeholder="Your Plant"
                                            value={plant.plant}
                                            onChange={event =>
                                                handleFormChange(event, i)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.form_question}>
                                <p className={`${styles.form_no_error} ${!isValid && plant.vibe === "" ? styles.form_error : ""}`}>!</p>
                                    <label className={styles.form_vibe_label} htmlFor={`Vibe of Plant: ${plant.plant}`}>Did you vibe?</label>
                                        <select required name="vibe"
                                        className={styles.form_vibe}
                                            id={`Vibe of Plant: ${plant.plant}`}
                                            value={plant.vibe}
                                            onChange={event =>
                                                handleFormChange(event, i)}>
                                            <option id="choose your vibe"
                                                name="vibe"
                                                className={styles.form_vibe_option} 
                                                value="">
                                                    Select One
                                                    </option>
                                            <option
                                                id={`Vibe of Plant: ${plant.plant}`}
                                                value="true"
                                                className={styles.form_vibe_option} 
                                                name="vibe"
                                                >
                                                    Hell yeah 🤘🏻
                                                    </option>
                                            <option
                                                id={`Vibe of Plant: ${plant.plant}`}
                                                value="false"
                                                name="vibe">
                                                    Not my vibe 🥀
                                                    </option>
                                        </select>
                                </div>
                            </section>
                            <div className={styles.form_question}>
                                <label className={styles.form_label} htmlFor={`Review of Plant: ${plant.plant}`}>
                                    Any wisdom to pass on?</label>
                                <textarea
                                    name="review"
                                    id={`Review of Plant: ${plant.plant}`}
                                    className={`${styles.form_comment} ${styles.form_input}`}
                                    placeholder="Have some extra wisdom? Let people know what to expect."
                                    value={plant.review}
                                    onChange={event =>
                                        handleFormChange(event, i)}
                                />
                            </div>
                            <button type="button" className={`${styles.form_button} ${plantData.length === 1 ? styles.form_button_hide : ""}`} onClick={() => removePlant(i)}>Remove</button> 
                        </div>
                    )
                })}
                <div className={styles.form_border}>
                    <button className={`${plantData.length === 5 ? styles.form_button_hide : styles.form_button}`} onClick={addPlant} type="button">Add another plant</button>
                    <p className={`${plantData.length === 5 ? styles.form_warning : styles.form_warning_hide}`}>You've reached the max amount of plants that can be submitted.</p>
                </div>
                <div className={styles.form_question}>
                    <label className={styles.form_label} htmlFor="signup">
                        Want us to let you know when Grow a Pear goes live?</label>
                    <input className={`${styles.form_email} ${styles.form_input}`}
                            type="email"
                            name="signup"
                            id="signup"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)}}
                    />
                </div>
                <button className={styles.form_button} value="submit" type="submit">Save my plants</button>
        </form>
    </div>
    )
  }