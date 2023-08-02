import './styles/globals.scss'


export const metadata = {
  title: 'Grow a Pear - Beta',
  description: 'Help your garden thrive',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
