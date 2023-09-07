import Link from "next/link";
import Company from "./Company";
import Features from "./Features";
import Button from "../button/Button";


export default function ListNavComp() {
  return (
    <div className="bg-white fixed w-30">
      <ul className="flex flex-col gap-5 " >
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

        <div className="flex flex-col gap-3 ">
        <Link className=" text-xs" href={"#"}>Login</Link>
        <Button word="Register" />
      </div>
    </div>
  )
}
