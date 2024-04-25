import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Page from "../src/app/your-garden/page";

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))
  
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

        // alt test submit button
        // test("NEW plants are submitted when submit button is clicked", () => {
        //     const {getByTestId} = render(<Page 
        //         handleSubmit={submit}/>);

        //     const submit = getByTestId('submit-test');
        //     fireEvent.click(submit);
        //     expect(submit).toHaveBeenCalled()
        // })

        // OLD test submit button
        
        test("plants with correct information are submitted and sent to database", () => {
            const mockHandleSubmit = jest.fn(console.log('hello'));
            const mockHandleSubmit1 = jest.fn(console.log('hello 2'));
            
            // const myMockFn = jest.fn(cb => cb(null, true));
            // myMockFn((err, val) => console.log(val));

            const {getByText} = render(<Page
                email={""}
                city={"toronto"}
                province={'ontario'}
                isValid={true}
                plantData={[{plant:"tomato", vibe: false, review: ""}]}
                handleAddPlant={Function}
                handleRemovePlant={Function}
                handleOnSubmit={mockHandleSubmit} 
                />);
            
            const button = getByText("Save my plants");
    
            userEvent.click(button);
            
            expect(button).toBeInTheDocument()
            expect(mockHandleSubmit).toHaveBeenCalled();
            expect(mockHandleSubmit1).toHaveBeenCalled();

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