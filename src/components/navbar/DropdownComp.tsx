type DropdownCompProps ={
    names:{
        title: string
    }[]
}

export default function DropdownComp(props:DropdownCompProps) {
  return (
    <div className="absolute bg-white border border-transparent px-1 py-1 rounded-md ml-10 drop-shadow-2xl">
      {props.names.map(name => {
        return(
            <div className="flex flex-col gap-1 px-4 py-1">
              <h3 className="text-xs">{name.title}</h3>
            </div>
        )
      })}
    </div>
  )
}
