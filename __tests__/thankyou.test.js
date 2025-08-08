import Page from "../src/app/thank-you/page";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";

describe('thank you page', () => {

    describe('make sure tests are all working', () => {
        // this test should always pass: if it fails, something is wrong.
        test('renders a heading', () => {

            render(<Page />);

            const heading = screen.getByRole('heading', {
                name: /Thanks for submitting 💖/i,
            })

                expect(heading).toBeInTheDocument();
                expect(heading).toHaveTextContent('Thanks for submitting 💖');

        })
    })

    describe('test links on page', () => {
        // link that goes back to garden quiz works
        test('link to quiz working', () => {
            render(<Page />);

            const link = screen.getByText("Submit more plants");

            expect(link.getAttribute("href")).toBe("/your-garden");
        })

        // link that goes back to home works
        test('link to home page working', () => {
            render(<Page />);

            const link = screen.getByText("Home");

            expect(link.getAttribute("href")).toBe("/");
        })
    })
})