import Link from "next/link";
import Company from "./Company";
import Features from "./Features";
import Button from "../button/Button";


export default function ListNavComp() {
  return (
  <div className="relative transition-all duration-700">
    <div className="bg-white absolute flex flex-col gap-5 h-screen w-40 -right-1 transition-all ease-in-out translate-x-2  duration-700">
      <ul className="flex flex-col gap-1 px-4 " >
            <li className="text-center text-sm ">
                <Features name={"Features"}  />
            </li>

            <li className="text-center text-sm">
                <Company name={"Company"} /> 
            </li>

            <li className="text-center text-sm"> 
                <Link href={"#"}>Careers</Link>
            </li>

            <li className="text-center text-sm">
                <Link href={"#"}>About</Link>
            </li>
        </ul>

        <div className="flex flex-col items-center  gap-3 ">
        <Link className=" text-sm text-center" href={"#"}>Login</Link>
        <div>
        <Button word="Register" />
        </div>
      </div>
    </div>
  </div>  
  )
}
