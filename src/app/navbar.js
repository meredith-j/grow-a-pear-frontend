import Image from "next/image"
import Link from "next/link"
import growapear from "../../public/logo.png"

export default function Navbar() {
    return (
    <div className="navbar">
        <div className="navbar__header">
            <Link
                href="/"
                className="navbar__home">
                <Image
                    priority
                    src={growapear}
                    alt="Grow a Pear Logo, links to homepage"
                    className="navbar__logo"
                    />
            </Link>
            <p className="navbar__title">Grow a Pear</p>
        </div>
    </div>
    )
  }