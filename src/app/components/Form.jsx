"use client"

import styles from '../styles/your-garden.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { formValidation } from '../functions/formValidation';

export default function Form() {

    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [plantData, setPlantData] = useState([{plant:"", vibe: undefined, review: ""}]);
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
        let newPlant = {plant:"", vibe: undefined, review: ""};
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

        if (city !== "" && province !== "" && plantData[index].vibe !== undefined && plantData[index].plant !== "") {
            setIsValid(true)
        }
        
    }

    // send request to axios
    const sendRequest = async () => {
        const response =  await axios

        .post(`http://localhost:8080/plant`, {city:city, province:province, plants:plantData, email:email})
        
        return response
    }
    
    // form submission (new)
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let validation = await formValidation(city, province, plantData);
  
        if (validation === false) {
            setIsValid(false)
            return
        }

        // setIsValid(await formValidation(city, province, plantData))

        if (!isValid) {
            return
        }

            else if (isValid) {
                localStorage.setItem('city', city);
                localStorage.setItem('province', province);
                localStorage.setItem('email', email);

                try {sendRequest()}
                    catch (error) {
                        console.log(error)
                    }
                
                router.push('/thank-you')
            }
    }

    return (
    <div className={styles.form_main}>
        <form className={styles.form}
            onSubmit={handleOnSubmit}>
                <div className={`${styles.form_question}  ${styles.form_location_question}`}>
                    <label className={styles.form_label} htmlFor="city and province">
                        Where do you live?</label>
                    <div className={styles.form_validation}>
                        <input className={`${styles.form_location} ${styles.form_input} ${!isValid && city === "" ? styles.form_input_error : ""}`}
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
                        <input className={`${styles.form_location} ${styles.form_input} ${!isValid && province === "" ? styles.form_input_error : ""}`}
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
                                <div className={`${styles.form_question} ${styles.form_question_tablet}`}>
                                    <label className={styles.form_label} htmlFor={`Plant #${i+1}`}>
                                        What did you grow?</label>
                                    <div className={styles.form_validation}>
                                        <input className={`${styles.form_plant} ${styles.form_input} ${!isValid && plant.plant === "" ? styles.form_input_error : ""}`}
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
                                <label className={styles.form_vibe_label} htmlFor={`Vibe of Plant: ${plant.plant}`}>Did you vibe?</label>
                                    <select className={`${styles.form_input} ${styles.form_input_vibe} ${!isValid && plant.vibe === undefined ? styles.form_input_error : ""}`}
                                        name="vibe"
                                        id={`Vibe of Plant: ${plant.plant}`}
                                        value={plant.vibe}
                                        onChange={event =>
                                            handleFormChange(event, i)}>
                                        <option id={`Vibe of Plant: ${plant.plant}`}
                                            name="vibe" 
                                            value="">
                                                Select One
                                                </option>
                                        <option
                                            id="vibe"
                                            value={true}
                                            name="vibe"
                                            >
                                                Hell yeah, we vibed 🤘🏻
                                                </option>
                                        <option
                                            id="vibe"
                                            value={false}
                                            name="vibe">
                                                We did not vibe. 🥀
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
                            <button type="button" className={`${styles.form_button} ${plantData.length === 1 ? styles.form_button_hide : ""}`} onClick={() => removePlant(i)}>Remove Plant</button> 
                        </div>
                    )
                })}
                <div className={styles.form_border}>
                    <button className={`${plantData.length === 5 ? styles.form_button_hide : styles.form_button}`} onClick={addPlant} type="button" data-testid="add-plant" id="add-plant">Add another plant</button>
                    <p className={`${plantData.length === 5 ? styles.form_warning : styles.form_warning_hide}`}>You've reached the max amount of plants that can be submitted.</p>
                </div>
                <div className={`${styles.form_question} ${styles.form_email_section}`}>
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
                <button className={styles.form_button} value="submit" type="submit" data-testid="submit-test">Save my plants</button>
        </form>
    </div>
    )
  }