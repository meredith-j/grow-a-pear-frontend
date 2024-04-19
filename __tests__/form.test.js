import Page from "../src/app/your-garden/page";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
// import {jest} from '@jest/globals';

// created mock for useRouter in order to write unit tests for this page
jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }),
  }));
  
describe('plant quiz/form', () => {

    // before each (render Page)
    // before each/after each (look into syntax)

    // descibe -- validation

    // describe -- ui

    // describe -- repeater
    
    // this test should always pass: if it fails, something is wrong.

    describe('tests that everything on page is working', () => {
        test('renders a header', () => {
            render(<Page />);

            const heading = screen.getByRole('heading', {name:
                /🍐 Tell us about your plants. 🍐/i
            })

            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent('🍐 Tell us about your plants. 🍐');
        });
    })

    describe('buttons on page', () => {
        
        //test that buttons are on page
        test("this section contains a button", () => {
            render(<Page
                    email={""}
                    city={""}
                    province={''}
                    isValid={true}
                    plantData={[{plant:"", vibe: "", review: ""}]}
                    handleAddPlant={Function}
                    handleRemovePlant={Function}
                    handleSubmit={Function} 
                    />);

            const element = screen.getByRole('button', { name: 'Save my plants' });
            expect(element).toBeInTheDocument();
        });

        //test submit button
        test("plants are submitted when submit button is clicked", () => {
            const mockHandleSubmit = jest.fn();
    
            const {getByText} = render(<Page
                email={""}
                city={""}
                province={''}
                isValid={true}
                plantData={[{plant:"", vibe: "", review: ""}]}
                handleAddPlant={Function}
                handleRemovePlant={Function}
                handleSubmit={mockHandleSubmit} 
                />);
              
            const button = getByText("Save my plants");
    
            fireEvent.click(button);
            
            expect(mockHandleSubmit).toHaveBeenCalled();
        })

        // "add plant" button adds a plant
        // test('new plant input', () => {
        //     const mockHandleAddPlant = jest.fn();

        //     // "testing library fireevent click tohavebeencalled"

        //     const {getByText} = render(<Page
        //         // onClick={mockHandleAddPlant}
        //         // email={""}
        //         // city={""}
        //         // province={''}
        //         // isValid={true}
        //         // plantData={[{plant:"", vibe: "", review: ""}]}
        //         // handleAddPlant={mockHandleAddPlant}
        //         // handleRemovePlant={Function}
        //         // handleSubmit={Function} 
        //         />);

        //     const button = getByText("Add another plant");
                
        //     // jest.spyOn().mockImplementation(); ???

        //     // fireEvent(myElement, new MouseEvent('click', { bubbles: true }));

        //     // fireEvent(button, new MouseEvent('click', {bubbles: true}));
        //         fireEvent.click(button);
                
        //         expect(mockHandleAddPlant).toHaveBeenCalled();
        // })
    })
})