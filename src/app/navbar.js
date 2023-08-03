import Image from "next/image"
import Link from "next/link"
import growapear from "../../public/logo.png"

export default function Navbar() {
    return (
    <div className="navbar">
        <Link
            a href="/"
            className="navbar__home">
            <Image
                priority
                src={growapear}
                alt="Grow a Pear Logo, links to homepage"
                className="navbar__logo"
                />
        </Link>
    </div>
    )
  }