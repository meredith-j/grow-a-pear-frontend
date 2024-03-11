import './styles/globals.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';


export const metadata = {
  title: 'Grow a Pear - Beta',
  description: 'Help your garden thrive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body> */}
      <body suppressHydrationWarning={true}>
        <div className="content">
        {/* <div> */}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  )
}
