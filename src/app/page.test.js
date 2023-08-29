import Page from "./page.js"
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { useRouter } from "next/router.js";

describe('Page', () => {
  it('renders a heading', () => {
    // arrange - what you want to test
    render(<Page />)

    // act - getting the data
    const heading = screen.getByRole('heading', {
      name: /welcome to grow a Pear/i,
    })

    // assert - make it work
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Welcome to Grow A Pear');
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