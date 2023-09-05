'use client'
import React, { useState } from "react"
import { CaretDown, CaretUp} from "@phosphor-icons/react";
import Dropdown from "./Dropdown";

type CompanyProps ={
    name: string
}

export default function Company(props:CompanyProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const dropMenuCompany = [
      {
        icon:'',
        title: "History",
      },
      {
         icon:'',
        title: "Our Team", 
      }, 
  
      {
         icon:'',
        title: "Blog"
      }
    ]
  return (
    <div>
      <button onClick={() => setIsExpanded (!isExpanded)} className="p-4 w-full flex item-center self-center justify-between font-bold tracking-wider duration-300 " >
        {props.name }
        {isExpanded && <CaretUp size={16} />}
        {!isExpanded && <CaretDown size={16} /> }
        
      </button>
      {isExpanded &&
        <div className="bg-white">
          <Dropdown names={dropMenuCompany} />
        </div>
      }
    </div>
  )
}
