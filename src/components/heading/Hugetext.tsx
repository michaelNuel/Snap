type HugetextProps = {
    firstText: string
    secondText: string
}

export default function Hugetext(props: HugetextProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-extrabold sm:text-6xl">{props.firstText}</h1>
      <h1 className="text-4xl font-extrabold sm:text-6xl ">{props.secondText}</h1>
    </div>
  )
}
