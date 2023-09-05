import Image from "next/image"

type DropdownProps ={
    names:{
        icon: string
        title: string
    }[]
}

export default function Dropdown(props:DropdownProps) {
  return (
    <div className="absolute">
      {props.names.map(name => {
        return (
        <div className="flex flex-row">
            <Image 
             src={name.icon}
             alt={"#"}
             width={10}
             height={10}

            />
           <h3 className="mt-1">{name.title}</h3>
        </div>
        )
      } )}
    </div>
  )
}
