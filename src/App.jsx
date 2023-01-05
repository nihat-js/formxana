import { useRef, useState } from 'react'
import './App.css'

import { Norm, Input, Button, normValidation } from './Norm/Norm'


const validate = (object, rules) => {
  let errors = {}

  for (const key in rules) {
    if (!object[key]) {
      continue;
    }

    errors[key] = []

    if (rules[key].required && object[key] == '') {
      errors[key] = [...errors[key], 'Required']
    }

    if (rules[key].allowedCharacters) {
      const range = []

      for  (const x of rules[key].allowedCharacters){
        if (x == 'abc'){
          range.push([97, 122])
        }else if (x =='ABC'){
          range.push([65,90])
        }else if (x == '123'){
          range.push([48,57])
        }else if (x.length == 1){
          range.push ([x.charCodeAt(0) , x.charCodeAt(0) ] )
        }
      }

      for (const x of object[key]) {
        let isValid = false
        for (const y of range) {
          if (x.charCodeAt(0) >= y[0] && x.charCodeAt(0) <= y[1]) {
            isValid = true
            break
          }
        }
        if (!isValid) {
          errors[key] = [...errors[key], 'Not allowed character']
          break;
        }
      }


    }

    if (rules[key].minlength && object[key].length <rules[key].minlength) {
      errors[key] = [...errors[key], 'Minimum length is 5']
    }
    if (rules[key].maxlength && object[key].length > rules[key].maxlength) {
      errors[key] = [...errors[key], 'Maximum length is 45']
    }



  }

  return errors
}

function App() {


  console.log(validate({
    firstName: 'Nihat',
    lastName: 'Abdullazade'
  }, {
    firstName.required(). 
    // firstName: { required: [true,'Required'], minlength: [3,'Minimum length is 3'], maxlength: [ 35 , ['Too long'], allowedCharacters: [  ['ABC', 'abc', '123', '_', '-'] , 'a' ] },
    // lastName: { required: true, minlength: 3, maxlength: 35, allowedCharacters: ['ABC', 'abc', '123', '_', '-'] }

  }))


  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target[0].name)


  }



  return (
    <div className="App">
      <form onSubmit={(e) => handleForm(e)} >
        <input name='firstname' type="text" />
        <input name='password' type="text" />
        <input type="text" />
        <button type='submit'> Send </button>
      </form>
    </div>
  )
}

export default App
