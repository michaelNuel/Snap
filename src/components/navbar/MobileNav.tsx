"use client"
import Image from "next/image";
import React, { useState } from "react"
import LogoImg from "../../../public/Images/logo.svg"
import { List, X } from "@phosphor-icons/react";
import ListNavComp from "./ListNavComp";

export default function MobileNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <nav className="py-5  sm:hidden">
        <div className="flex  justify-between">
          <div>
             <Image 
             src={LogoImg}
             height={17}
             alt="#"
            />
          </div>
          <div>
            <button onClick={() => setIsExpanded (!isExpanded)} className="transition-all ease-in-out translate-x-2  duration- pr-2">
             {!isExpanded && <List size={20} />}
             {isExpanded && <X size={20} />}
            </button>
            {isExpanded && 
                  <div className="transition-all ease-in-out translate-x-2  duration-700" >
                 <ListNavComp />
              </div>
            }
          </div>
 
        </div> 
    </nav>
  )  
}
