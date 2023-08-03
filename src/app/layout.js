import './styles/globals.scss';
import Navbar from './navbar';


export const metadata = {
  title: 'Grow a Pear - Beta',
  description: 'Help your garden thrive',
}

export default function RootLayout({ children }) {
  return (
      <div className='content'>
        <Navbar />
        <main>{children}</main>
      </div>
  )
}
