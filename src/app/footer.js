import Link from "next/link";

export default function Footer() {
    return (
    <div className="footer">
        <div className="footer_section">
            <p className="footer_text">© Grow a Pear, 2023</p>
        </div>
        <div className="footer_section">
            <span className="footer_text">Learn more about the developer </span>
            <Link
                href="https://www.meredithjonatan.dev"
                className="footer_link">
                <span className="footer_link">here</span>
            </Link>
            <span className="footer_text">.</span>
        </div>
    </div>
    )
  }