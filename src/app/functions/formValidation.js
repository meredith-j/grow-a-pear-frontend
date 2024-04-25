async function formValidation (city, province, plantData) {

    console.log("validation function starts")

    let validation;

    if (!city || !province) {
        validation = false;
        console.log(`inside validation function (city/province), is valid? ${validation}`)
        return validation
    }

    for (let i = 0; i < plantData.length; i++) {
        if (plantData[i].plant === "" || plantData[i].vibe === undefined) {
            validation = false;
            console.log(`inside validation function (plantData), is valid? ${validation}`)
            return validation
        }

    }

    // if (!isValid) {
    //     console.log("function works --- form is not valid 🤡")
    //     return false
    // }

    // else if (isValid) {
    //     console.log("function works --- form is valid 🥰") 
    //     return true
    // }


}

export {formValidation}