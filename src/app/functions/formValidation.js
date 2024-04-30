async function formValidation (city, province, plantData) {

    // console.log("validation function starts")

    let validation = true;

    if (!city || !province) {
        validation = false;
        // console.log("false city/province")
        // console.log(validation)
        return validation
    }

    for (let i = 0; i < plantData.length; i++) {
        if (plantData[i].plant === "" || plantData[i].vibe === undefined) {
            validation = false;
            // console.log("false plant data")
            return validation
        }

    }

    // console.log("all true, wahoo!")
    return validation
}

export {formValidation}