import Image from "next/image";
import LogoImg from "../../../public/Images/logo.svg"
import Link from "next/link";
import Button from "../button/Button";


export default function Navbar() {
  return (
    <nav className='flex justify-between items-center pt-8'>
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
                <Link href={"#"}>Features</Link>
            </li>

            <li className=" text-xs">
                <Link href={"#"}>Company</Link>
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
  )
}
