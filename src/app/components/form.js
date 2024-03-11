"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';

export default function Form() {

    const [futureUser, setFutureUser] = useState("");
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

          if (!city || !province || !email) {
            setCity("")
            setProvince("")
            setEmail("")
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

    // NOT DONE remove form fields
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
    
    // form submission (new)
    const handleOnSubmit = (e) => {
        e.preventDefault();

            localStorage.setItem('city', city);
            localStorage.setItem('province', province);
            localStorage.setItem('email', email);
            
            axios
                .post(`http://localhost:8080/plant`, {city:city, province:province, plants:plantData, email:email})
                .then(() => {
                    console.log("🤘🏻 .then is working")

                    // navigate to thank you page 

                })
                .catch((err) => {
                console.log(err);
                });

                router.push('/thank-you')
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
                {plantData.map((plant, i) => {
                    return (
                        <div key={i} className={styles.form_border}>
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
                                            handleFormChange(event, i)}
                                    />
                                </div>
                            </div>
                            <div className={styles.form_question}>
                                <label className={styles.form_vibe_label} htmlFor="vibe">Did you vibe?</label>
                                    <select name="vibe"
                                        id="vibe"
                                        value={plant.vibe}
                                        onChange={event =>
                                            handleFormChange(event, index)}>
                                        <option id="choose your vibe"
                                            name="vibe" 
                                            value="">
                                                Select One
                                                </option>
                                        <option
                                            id="vibe"
                                            value="true"
                                            name="vibe"
                                            >
                                                Hell yeah, we vibed 🤘🏻
                                                </option>
                                        <option
                                            id="vibe"
                                            value="false"
                                            name="vibe">
                                                We did not vibe. 🥀
                                                </option>
                                    </select>
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
                            id="signup"
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