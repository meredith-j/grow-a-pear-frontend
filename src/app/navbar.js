import Image from "next/image"
import growapear from "../../public/logo.png"

export default function Navbar() {
    return (
    <div className="navbar">
        <Image
        priority
        src={growapear}
        alt="Grow a Pear Logo"
        className="navbar__logo"
        />
    </div>
    )
  }