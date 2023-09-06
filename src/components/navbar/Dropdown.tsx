import Image from "next/image"
// this drop down only affects the featurs 
type DropdownProps ={
    names:{
        icon: string
        title: string
    }[]
}

export default function Dropdown(props:DropdownProps) {
  return (
    <div className="absolute bg-white border border-transparent px-1 py-1 rounded-md drop-shadow-2xl">
      {props.names.map(name => {
        return (
        <div key={name.title} className="flex flex-row items-center px-4 gap-2">
          <div>
            <Image 
             src={name.icon}
             alt={"#"}
             width={10}
             height={10}

            />
         </div>

           <div>
             <h3 className="mt-1">{name.title}</h3>
           </div>
        </div>
        )
      } )}
    </div>
  )
}
