import { useState } from "react"

export const Norm = (props) => {
  const [norm,setNorm] = useState(props.$)

  


  return (
    <form>
      Tester
    </form>
  )
}


export const Input = () => {
  return (
    <input type="text" />
  )
}


export const Button = () => {
  return (
    <button> V </button>
  )
}

export const normValidation = (arg) => {
  console.log(arg)
}