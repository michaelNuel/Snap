type DarkbtnProps = {
    btnName: string
}
export default function Darkbtn(props: DarkbtnProps) {
  return (
    <button className="text-xs border rounded-lg bg-black text-white py-2 px-3">
      {props.btnName}
    </button>
  )
}
