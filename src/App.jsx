import { useRef, useState } from 'react'
import './App.css'

import { validateFormWithNames } from './formxana'



function App() {

  function handleForm(e) {
    e.preventDefault()

    const errors = validateFormWithNames(e, {
      firstName : {  required : [ true , 'Required']  , minlength : [ 2 , 'Too short' ] , maxlength : [25 , 'Too long']  , allowedCharacters : [ ['abc','ABC'] , 'ALlowed Characters are ' ]    },
      lastName : {  required : [ true , 'Required']  , minlength : [ 2 , 'Too short' ] , maxlength : [25 , 'Too long']  , allowedCharacters : [ ['abc','ABC'] , 'ALlowed Characters are ' ]    },

    })
    console.log(errors)
  }



  return (
    <div className="App">
      <form onSubmit={(e) => handleForm(e)} >
        <input name='firstName' type="text" />
        <input name='lastName' type="text" />
        <button type='submit'> Send </button>
      </form>
    </div>
  )
}

export default App
