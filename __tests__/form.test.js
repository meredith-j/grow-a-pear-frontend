import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
        test('addPlant function is called when add plant button is clicked', async () => {
            const addPlant=jest.fn();
            const button = screen.getByTestId('add-plant');

            expect(button).toBeInTheDocument();

            const buttonClick = await fireEvent.click(button);
            
            expect(addPlant).toHaveBeenCalled()
        })
        
        // expect plant #2 inputs to appear when clicking add plant
        test('when clicking add plant, form will render additional input for second plant', async () => {
            const plantOne = screen.getByText('Plant #1:')
            const button = screen.getByTestId('add-plant');

            expect(button).toBeInTheDocument();
            expect(plantOne).toBeInTheDocument();

            fireEvent.click(button)
            // let buttonClick = await fireEvent.click(button);

            // const plantTwo = screen.getByText('Plant #2:');

            // // expect(buttonClick.resolve(plantTwo)).resolves.toBeInTheDocument();
            // expect(buttonClick).toBeTruthy();
            // expect(plantTwo).toBeInTheDocument();

            // await waitFor(() => {
            //     expect(findByText('Plant #2:')).toBeInTheDocument();
            // })

            expect(await screen.queryByText('Plant #2:')).toBeInTheDocument();
            expect(await screen.queryByText('this does not exist in the document')).not.toBeInTheDocument();
        })

        // expect length is -1 when removing plant
    })

    // describe('handle submit', () => {
        // test for error states
        // test for submission success/page should navigate to thank-you
    // })

    // describe('local storage', () => {

    // })
})