type HugetextProps = {
    firstText: string
    secondText: string
}

export default function Hugetext(props: HugetextProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-extrabold">{props.firstText}</h1>
      <h1 className="text-6xl font-extrabold">{props.secondText}</h1>
    </div>
  )
}
