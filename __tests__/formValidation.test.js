import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import { formValidation } from "@/src/app/functions/formValidation";

describe('form validation function', () => {
    describe('all of these tests should return FALSE', () =>{
        test('one plant, city & NO province', async () => {
            const city = "toronto";
            const province = "";
            const plantData = [{plant: "tomato", vibe: true, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        });
        test('one plant, province & NO city', async () => {
            const city = "";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: true, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        }); 
        test('one plant, city & province, NO plant name', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "", vibe: true, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        }); 
        test('one plant, city & province, NO plant vibe', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: undefined, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        });
        test('two plants, city & province, NO plant vibe (one plant)', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: undefined, review: ""}, {plant: "tomato", vibe: false, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        });
        test('two plants, city & province, NO plant vibe (one plant)', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: true, review: ""}, {plant: "tomato", vibe: undefined, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        }); 
        test('five plants, city & province, NO plant vibe (one plant)', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: true, review: ""}, {plant: "tomato", vibe: true, review: ""}, {plant: "tomato", vibe: undefined, review: ""}, {plant: "tomato", vibe: false, review: ""}, {plant: "tomato", vibe: true, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeFalsy();
        });   
    });

    describe('all of these tests should return TRUE', () =>{
        test('one plant, city & province', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: true, review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)

            expect(mockFormValidation).toBeTruthy();
        });
        test('two plants, city & province', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: "true", review: ""}, {plant: "tomato", vibe: "true", review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)
            
            expect(mockFormValidation).toBeTruthy();
        });
        test('five plants, city & province', async () => {
            const city = "toronto";
            const province = "ontario";
            const plantData = [{plant: "tomato", vibe: "true", review: ""}, {plant: "tomato", vibe: "true", review: ""}, {plant: "tomato", vibe: "true", review: ""}, {plant: "tomato", vibe: "true", review: ""}, {plant: "tomato", vibe: "true", review: ""}];

            const mockFormValidation = await formValidation(city, province, plantData)
            
            expect(mockFormValidation).toBeTruthy();
        });
    })
})