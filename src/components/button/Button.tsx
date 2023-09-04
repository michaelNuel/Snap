type ButtonProps ={
    word: string
}

export default function Button(props: ButtonProps ) {
  return (
    <button className="text-sm border">
      {props.word}
    </button>
  )
}
