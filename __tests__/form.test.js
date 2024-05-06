import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";

import Form from "../src/app/components/Form"

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))
  
describe('plant quiz/form', () => {

    beforeEach(() => {
        render(<Form />)
    })

    describe('tests that everything on page is working', () => {
        test('renders a label', () => {

            const label = screen.getByText('Where do you live?')

            expect(label).toBeInTheDocument();
            expect(label).toHaveTextContent('Where do you live?');
        });

        //test that buttons are on page
        test("this section contains a button", () => {

            const element = screen.getByRole('button', { name: 'Save my plants' });
            expect(element).toBeInTheDocument();
        });
    })

    describe('adding and removing plants', () => {
        
        // expect addPlant to be called onClick
        test('addPlant function is called when add plant button is clicked', () => {
            const addPlant=jest.fn();
            render(<Form />);
            const button = screen.getByTestId('add-plant');
            fireEvent.click(button)
            expect(addPlant).toHaveBeenCalledTimes(1)
            // expect(plantData).toHaveLength(2)
        })
        
        // expect length is +1 when "adding plant"
        // test('length of plantData array increases by 1 when clicking add plant', () => {
        //     const plantData = [{plant:"tomato", review: "", vibe: true}];
        //     const button = screen.getByRole('button', {name: 'Add another plant'});

        //     console.log(button)
        //     fireEvent.click(button)
        //     // console.log(plantData)

        //     // expect(onClick).toHaveBeenCalledTimes(1);
        //     expect(plantData).toHaveLength(2)

        // })

        // expect length is -1 when removing plant
    })

    // describe('handle submit', () => {
        // test for error states
        // test for submission success/page should navigate to thank-you
    // })

    // describe('local storage', () => {

    // })
})