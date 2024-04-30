import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import { formValidation } from "@/src/app/functions/formValidation";

describe('form validation function', () => {
    // describe('all of these tests should return FALSE', () =>{
        
    // });

    describe('all of these tests should return TRUE', () =>{
        test('one plant, city & province', () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: "true", review: ""}];

            const mockFormValidation = formValidation(city, province, plantData)
            
            expect(mockFormValidation).toBeTruthy();
        })
    })
})