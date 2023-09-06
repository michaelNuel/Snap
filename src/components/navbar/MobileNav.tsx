import Image from "next/image";
import LogoImg from "../../../public/Images/logo.svg"

export default function MobileNav() {
  return (
    <nav className="block py-5 sm:hidden">
        <div>
        <Image 
       src={LogoImg}
        height={17}
        alt="#"
          />
        </div>
    </nav>
  )
}
