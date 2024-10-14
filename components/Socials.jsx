import Link from "next/link";

import {FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaGlobe} from "react-icons/fa"

const Socials = ({ContainerStyles}) => {
  return (
    <ul className={`${ContainerStyles}`}>
        <li>
            <Link href="/">
                <FaYoutube />
            </Link>
        </li>
        <li>
            <Link href="/">
                <FaFacebook />
            </Link>
        </li>
        <li>
            <Link href="/">
                <FaTwitter />
            </Link>
        </li>
        <li>
            <Link href="/">
                <FaInstagram />
            </Link>
        </li>
        <li>
            <Link href="/">
                <FaGlobe />
            </Link>
        </li>
    </ul>
  )
}

export default Socials