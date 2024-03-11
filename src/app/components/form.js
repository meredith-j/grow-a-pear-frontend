"use client"

import styles from '../styles/your-garden.module.scss'
import axios from 'axios';
import { useState } from 'react';
import Script from 'next/script';
import usePlacesAutocomplete from "use-places-autocomplete";

export default function Form() {

    const [futureUser, setFutureUser] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [isValid, setIsValid] = useState(true)
    // const [value, setValue] = useState("")
    const [plantData, setPlantData] = useState([{plant:"", vibe: "", review: ""}])
    let newData;

    // load google autocomplete functionality
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        callbackName: "initAutocomplete",
        requestOptions: {

           
            // 'country': ['ca'],
            // region: "ca"
            // 'types': ["locality"],
            // region: "ca",
            // bounds: { country: "us" },
            // {type: ["locality", "sublocality", "(cities)", "(regions)"],
            // strictbounds: {country: "ca"}}}
        },
        debounce: 300,
      });
  
      const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          // When the user selects a place, we can replace the keyword without request data from API
          // by setting the second parameter to "false"
          setValue(description, false);
          clearSuggestions();
        };
    
      const renderSuggestions = () =>
      
        data.map((suggestion, i) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
        //   if (suggestion.types.includes('locality')) {
        //     newData = data.push(i)
        //   }

          console.log(data)

          return (
            <li key={place_id} onClick={handleSelect(suggestion)}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
          );
        });
    

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
        <Script async
            src={process.env.GOOGLE_MAPS_SCRIPT}>
        </Script>
        <form className={styles.form}
            onSubmit={handleOnSubmit}>
                <div className={styles.form_question}>
                    <label className={styles.form_label} htmlFor="location">
                        Where do you live?</label>
                    <div className={styles.form_validation}>
                        <p className={`${styles.form_no_error} ${!isValid && city === "" ? styles.form_error : ""}`}>!</p>
                        <input className={styles.form_location}
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Your City & Province/Territory"
                            value={value}
                            onChange={handleInput}
                        />
                        <ul>{renderSuggestions()}</ul>
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
                                {/* BELOW IS OLD FORM FOR VIBE -- may need for validation later */}
                                {/* <div className={styles.form_question}>
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
                                                <label className={styles.form_vibe_label}  htmlFor="vibe">We did not vibe. 🥀</label>
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
                                                <label className={styles.form_vibe_label} htmlFor="vibe">Hell yeah, we vibed 🤘🏻</label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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