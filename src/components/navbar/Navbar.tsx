import Image from "next/image";
import LogoImg from "../../../public/Images/logo.svg"
import Link from "next/link";
import Button from "../button/Button";
import Features from "./Features";
import Company from "./Company";
import MobileNav from "./MobileNav";


export default function Navbar() {

  return (
    <div>
      <MobileNav />
    <nav className='hidden sm:flex justify-between items-center pt-1 overflow-hidden '>
      <div className="flex flex-row gap-x-14 items-center">
        <div className="">
          <Image 
           src={LogoImg}
           height={17}
           alt="#"
          />
        </div>

        <ul className="flex flex-row gap-5 items-center" >
            <li className=" text-xs">
                <Features name={"Features"}  />
            </li>

            <li className=" text-xs">
                <Company name={"Company"} />  
            </li>

            <li className=" text-xs"> 
                <Link href={"#"}>Careers</Link>
            </li>

            <li className=" text-xs">
                <Link href={"#"}>About</Link>
            </li>
        </ul>
      </div>

      <div className="flex flex-row gap-3 items-center">
        <Link className=" text-xs" href={"#"}>Login</Link>
        <Button word="Register" />
      </div>
    </nav>
    </div>
  )
}
