'use client'
import React, { useState } from "react"
import { CaretDown, CaretUp} from "@phosphor-icons/react";
import DropdownComp from "./DropdownComp";

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
      <button onClick={() => setIsExpanded (!isExpanded)} className="p-4 w-full flex item-center self-center justify-between  tracking-wider duration-300 " >
        {props.name }
        {isExpanded && <CaretUp size={16} />}
        {!isExpanded && <CaretDown size={16} /> }
        
      </button>
      {isExpanded &&
        <div > 
          <DropdownComp names={dropMenuCompany} />
        </div>
      }
    </div>
  )
}
