async function formValidation (city, province, plantData) {

    console.log("validation function starts")

    let validation;

    if (!city || !province) {
        validation = false;
        return validation
    }

    for (let i = 0; i < plantData.length; i++) {
        if (plantData[i].plant === "" || plantData[i].vibe === undefined) {
            validation = false;
            return validation
        }

    }
}

export {formValidation}