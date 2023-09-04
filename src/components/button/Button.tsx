type ButtonProps ={
    word: string
}

export default function Button(props: ButtonProps ) {
  return (
    <button className="text-xs items-center border rounded-lg px-4 py-1 border-gray-400">
      {props.word}
    </button>
  )
}
