"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { useState } from 'react';

export default function Form() {

    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [plant, setPlant] = useState("")
    const [vibe, setVibe] = useState("")
    const [review, setReview] = useState("")

    const handleOnSubmit = (e) => {
        // prevent refresh
        e.preventDefault();

        // form validation

        // create body for request
        const newPlant = {};
        newPlant.city = e.target.city.value;
        newPlant.province = e.target.province.value;
        newPlant.plant = e.target.plant.value;
        newPlant.vibe = e.target.vibe.value;
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
                    <input className={styles.form_location}
                        type="text"
                        name="city"
                        placeholder="Your City"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value)}}
                    />
                    <input className={styles.form_location}
                        type="text"
                        name="province"
                        placeholder="Your Province/Territory"
                        value={province}
                        onChange={(e) => {
                            setProvince(e.target.value)}}
                    />
                </div>
                <div className={styles.form_question}>
                    <label className={styles.form_label}>
                        What did you grow?</label>
                    <input className={styles.form_plant}
                        type="text"
                        name="plant"
                        placeholder="Your Plant"
                        value={plant}
                        onChange={(e) => {
                            setPlant(e.target.value)}}
                    />
                </div>
                <div className={styles.form_question}>
                    <label className={styles.form_label}>
                        Did you vibe with this plant?</label>
                    <div className={styles.form_vibe}>
                        <input className="vibe__option"
                            type="radio" 
                            name="vibe"
                            value="false"
                            onChange={(e) => {
                            setVibe(e.target.value)}}
                        />
                        <p className={styles.form_vibe_label}>We did not vibe. 🥀</p>
                    </div>
                    <div className={styles.form_vibe}>
                        <input className="vibe__option"
                            type="radio" 
                            name="vibe"
                            value="true"
                            onChange={(e) => {
                            setVibe(e.target.value)}}
                        />
                        <p className={styles.form_vibe_label}>Hell yeah, we vibed 🤘🏻</p>
                    </div>
                </div>
                <div className={styles.form_question}>
                    <label className={styles.form_label}>
                        Any wisdom to pass on?</label>
                    <textarea
                        name="review"
                        id="review"
                        className={styles.form_comment}
                        value={review}
                        onChange={(e) => {
                            setReview(e.target.value)}}
                    />
                </div>
                <button className={styles.form_submit} type="submit">
                    Save my plants
                </button>
        </form>
    </div>
    )
  }