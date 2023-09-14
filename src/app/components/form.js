"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { use, useState } from 'react';

export default function Form() {

    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    // const [plant, setPlant] = useState("")
    // const [vibe, setVibe] = useState("")
    // const [review, setReview] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [plantData, setPlantData] = useState([{plant:"", vibe: "", review: ""}])

    // add form fields
    const addPlant = () => {
        let newPlant = {plant:"", vibe: "", review: ""};
        
        setPlantData([...plantData, newPlant])
    }

    // form update
    const handleFormChange = (event, index) => {

        let data = [...plantData];
        data[index][event.target.name] = event.target.value;
        setPlantData(data)

    }

    // form submission
    const handleOnSubmit = (e) => {
        // prevent refresh
        e.preventDefault();

        // form validation
        // let errors = {};

        if (!city || city === "") {
            // errors.city = "City is required."
            setIsValid(false)
            return
        }

        if (!province || province === "") {
            // errors.city = "City is required."
            setIsValid(false)
            return
        }

        if (!plant || plantData.plant === "") {
            // errors.plant = "Plant is required."
            setIsValid(false)
            return
        }

        if (!vibe || plantData.vibe === "") {
            // errors.vibe = "Vibe is required."
            setIsValid(false)
            return
        }

        // setErrors(errors)

        // create body for request
        const newPlant = {};
        newPlant.city = e.target.city.value;
        newPlant.province = e.target.province.value;
        newPlant.plant = e.target.plant.value;
        newPlant.vibe = e.target.vibe.value;
        newPlant.review = e.target.review.value;

        console.log(newPlant)

        // send POST request
        axios
            .post(`http://localhost:8080/plant`, newPlant)
            .then(() => {
                    
                // navigate to thank you page (maybe email sign ups?)

                console.log("🤘🏻")
            })
            .catch((err) => {
            console.log(err);
            });
        
    }

    return (
    <div>
        <form className={styles.form}
            onSubmit={handleOnSubmit}
            >
                <div className={styles.form_question}>
                    <label className={styles.form_label}>
                        Where do you live?</label>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && city === "" ? styles.form_error : ""}`}>!</p>
                        <input className={styles.form_location}
                            type="text"
                            name="city"
                            placeholder="Your City"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value)}}
                        />
                    </div>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && province === "" ? styles.form_error : ""}`}>!</p>
                        <input className={styles.form_location}
                            type="text"
                            name="province"
                            placeholder="Your Province/Territory"
                            value={province}
                            onChange={(e) => {
                                setProvince(e.target.value)}}
                        />
                    </div>
                </div>
                {plantData.map((plant, index) => {
                    return (
                        <div key={index} className={styles.form_border}>
                            <div className={styles.form_question}>
                                <label className={styles.form_label}>
                                    What did you grow?</label>
                                <div className={styles.form_validation}>
                                    <p className={`${styles.form_no_error} ${!isValid && plantData.plant === "" ? styles.form_error : ""}`}>!</p>
                                    <input className={styles.form_plant}
                                        type="text"
                                        name="plant"
                                        placeholder="Your Plant"
                                        value={plant.plant}
                                        onChange={event =>
                                            handleFormChange(event, index)}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_question}>
                                <label className={styles.form_label}>
                                    Did you vibe with this plant?</label>
                                <div className={styles.form_vibes_validation}>
                                    <p className={`${styles.form_no_error} ${!isValid && plantData.vibe === "" ? styles.form_error : ""}`}>!</p>
                                    <div className={styles.form_vibes}>
                                        <div className={styles.form_vibe}>
                                            <input className={styles.form_vibe_option}
                                                type="radio" 
                                                name="vibe"
                                                value="false"
                                                onChange={event =>
                                                    handleFormChange(event, index)}
                                            />
                                            <p className={styles.form_vibe_label}>We did not vibe. 🥀</p>
                                        </div>
                                        <div className={styles.form_vibe}>
                                            <input className={styles.form_vibe_option}
                                                type="radio" 
                                                name="vibe"
                                                value="true"
                                                onChange={event =>
                                                    handleFormChange(event, index)}
                                            />
                                            <p className={styles.form_vibe_label}>Hell yeah, we vibed 🤘🏻</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.form_question}>
                                <label className={styles.form_label}>
                                    Any wisdom to pass on?</label>
                                <textarea
                                    name="review"
                                    id="review"
                                    className={styles.form_comment}
                                    value={plant.review}
                                    onChange={event =>
                                        handleFormChange(event, index)}
                                />
                            </div>
                        </div>
                    )
                })}
                <button className={styles.form_more} onClick={addPlant}>Add another plant</button>
                <button className={styles.form_submit} type="submit">
                    Save my plants
                </button>
        </form>
    </div>
    )
  }