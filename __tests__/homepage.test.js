import Page from "../src/app/page";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";

describe('home page', () => {

  // check that page renders?

  describe('ensures test is running properly', () => {

    // this test should always pass: if it fails, something is wrong.
    test('should render a heading welcoming the user', () => {
      // arrange - what you want to test
      render(<Page />)

      // act - getting the data
      const heading = screen.getByRole('heading', {
        name: /Welcome to Grow a Pear/i,
      })

      // assert - make it work
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Welcome to Grow A Pear');
    });
  })

  describe('test links on page', () => {
  
    // tests the link to garden quiz
    test('link navigates to /your-garden',() => {
      render(<Page />);

      const link = screen.getByRole("link");

      expect(link.getAttribute("href")).toBe("/your-garden");

    });
  })

})

// jest.mock("next/link", () => {
//     return ({children}) => {
//       return children;
//     }
//   });
  
//   describe("Home", () => {
//     it.only("should navigate accordingly", () => {
//       const push = jest.fn()
//       useRouter.mockImplementationOnce(() => ({
//         asPath: "/",
//         push,
//       }))
  
//       const { getByTestId } = render(<Home />)
  
//       const mytest = getByTestId("mytest")
//       fireEvent.click(mytest)
//       expect(push).toHaveBeenCalledWith("/your-garden")
//     })
//   })