"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { use, useState } from 'react';

export default function Form() {

    const [futureUser, setFutureUser] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [plantData, setPlantData] = useState([{plant:"", vibe: "", review: ""}])

    // add form fields
    const addPlant = () => {
        let newPlant = {plant:"", vibe: "", review: ""};
        setPlantData([...plantData, newPlant])
    }

    // remove form fields
    const removePlant = () => {

    }

    // form update
    const handleFormChange = (event, index) => {
        event.preventDefault();

        let data = [...plantData];
        data[index][event.target.name] = event.target.value;
        setPlantData(data)

        
        // for (let i = 0; i < data.length; i++) {

        //     console.log(data[i])
            
        //     axios
        //         .post(`http://localhost:8080/plant`, {email:email, city:city, province:province, sunlight:sunlight, plant:data[i].plant, vibe:data[i].vibe, review:data[i].review})
        // }

    }

    // form submission (old)
    // const handleOnSubmit = (e) => {
    //     // prevent refresh
    //     e.preventDefault();

    //     // form validation
    //     // let errors = {};

    //     if (!city || city === "") {
    //         // errors.city = "City is required."
    //         setIsValid(false)
    //         return
    //     }

    //     if (!province || province === "") {
    //         // errors.city = "City is required."
    //         setIsValid(false)
    //         return
    //     }

    //     if (!plant || plantData.plant === "") {
    //         // errors.plant = "Plant is required."
    //         setIsValid(false)
    //         return
    //     }

    //     if (!vibe || plantData.vibe === "") {
    //         // errors.vibe = "Vibe is required."
    //         setIsValid(false)
    //         return
    //     }

    //     // setErrors(errors)

    //     // create body for request
    //     const newPlant = {};
    //     newPlant.city = e.target.city.value;
    //     newPlant.province = e.target.province.value;
    //     newPlant.plant = e.target.plant.value;
    //     newPlant.vibe = e.target.vibe.value;
    //     newPlant.review = e.target.review.value;

    //     console.log(newPlant)
    //     console.log(plantData)

    //     // send POST request
    //     axios
    //         .post(`http://localhost:8080/plant`, newPlant)
    //         .then(() => {
                    
    //             // navigate to thank you page (maybe email sign ups?)

    //             console.log("🤘🏻")
    //         })
    //         .catch((err) => {
    //         console.log(err);
    //         });
        
    // }

    // refactoring form submission to include multiple plants
    
    // form submission (new)
    const handleOnSubmit = (e) => {
        e.preventDefault();

            console.log(city, province, plantData, email)

            // send POST request
            axios
                .post(`http://localhost:8080/plant`, {city:city, province:province, plants:plantData, email:email})
                .then(() => {
                
                // navigate to thank you page 

                console.log("🤘🏻")
                })
                .catch((err) => {
                console.log(err);
                });
    }

    return (
    <div>
        <form className={styles.form}
            onSubmit={handleOnSubmit}>
                <div className={styles.form_question}>
                    <label className={styles.form_label} htmlFor="city and province">
                        Where do you live?</label>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && city === "" ? styles.form_error : ""}`}>!</p>
                        <input className={styles.form_location}
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
                                <label className={styles.form_label} htmlFor="plant">
                                    What did you grow?</label>
                                <div className={styles.form_validation}>
                                    <p className={`${styles.form_no_error} ${!isValid && plantData.plant === "" ? styles.form_error : ""}`}>!</p>
                                    <input className={styles.form_plant}
                                        type="text"
                                        name="plant"
                                        id="plant"
                                        placeholder="Your Plant"
                                        value={plant.plant}
                                        onChange={event =>
                                            handleFormChange(event, index)}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_question}>
                                <p className={styles.form_label}>
                                    Did you vibe with this plant?</p>
                                <div className={styles.form_vibes_validation}>
                                    <p className={`${styles.form_no_error} ${!isValid && plantData.vibe === "" ? styles.form_error : ""}`}>!</p>
                                    <div className={styles.form_vibes}>
                                        <div className={styles.form_vibe}>
                                            <input className={styles.form_vibe_option}
                                                type="radio" 
                                                name="vibe"
                                                id="did not vibe"
                                                value="false"
                                                onChange={event =>
                                                    handleFormChange(event, index)}
                                            />
                                            <label className={styles.form_vibe_label}  htmlFor="did not vibe">We did not vibe. 🥀</label>
                                        </div>
                                        <div className={styles.form_vibe}>
                                            <input className={styles.form_vibe_option}
                                                type="radio" 
                                                name="vibe"
                                                id="we did vibe"
                                                value="true"
                                                onChange={event =>
                                                    handleFormChange(event, index)}
                                            />
                                            <label className={styles.form_vibe_label} htmlFor="we did vibe">Hell yeah, we vibed 🤘🏻</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.form_question}>
                                <label className={styles.form_label} htmlFor="review">
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
                <div className={styles.form_question}>
                    <label className={styles.form_label} htmlFor="signup">
                        Want us to let you know when Grow a Pear goes live?</label>
                    <input className={styles.form_email}
                            type="text"
                            name="signup"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)}}
                    />
                </div>
                <button className={styles.form_more} onClick={addPlant} type="button">Add another plant</button>
                <button className={styles.form_submit} value="submit" type="submit">Save my plants</button>
        </form>
    </div>
    )
  }