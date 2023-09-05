 'use client'
import React, { useState } from "react"
import { CaretDown, CaretUp} from "@phosphor-icons/react";
import Dropdown from "./Dropdown";

type FeaturesProps ={
  name: string 
}

export default function Features(props:FeaturesProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const dropMenuFeatures =[
    {
      icon:"Images/icon-todo.svg",
      title:"todo List"
    },

    {
      icon:"Images/icon-calendar.svg",
      title:"calender"
    },

    {
      icon:"Images/icon-reminders.svg",
      title:"Reminders"  
    },

    {
      icon:"Images/icon-planning.svg",
      title:"planning"
    },
  ]
  return (
    <div>
      <button onClick={() => setIsExpanded (!isExpanded)} className="p-4 w-full flex item-center self-center justify-between font-bold tracking-wider duration-300 " >
        {props.name }
        {isExpanded && <CaretUp size={16} />}
        {!isExpanded && <CaretDown size={16} /> }
        
      </button>
      {isExpanded &&
        <div className="bg-white flex flex-col">
          <Dropdown names={dropMenuFeatures} />
        </div>
      }
    </div>
  )
}

