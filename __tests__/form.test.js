import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Page from "../src/app/your-garden/page";

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))
  
describe('plant quiz/form', () => {

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
    })
})