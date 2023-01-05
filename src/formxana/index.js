export const validate = (object, rules) => {
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

      for (const x of rules[key].allowedCharacters) {
        if (x == 'abc') {
          range.push([97, 122])
        } else if (x == 'ABC') {
          range.push([65, 90])
        } else if (x == '123') {
          range.push([48, 57])
        } else if (x.length == 1) {
          range.push([x.charCodeAt(0), x.charCodeAt(0)])
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

    if (rules[key].minlength && object[key].length < rules[key].minlength) {
      errors[key] = [...errors[key], 'Minimum length is 5']
    }
    if (rules[key].maxlength && object[key].length > rules[key].maxlength) {
      errors[key] = [...errors[key], 'Maximum length is 45']
    }



  }

  return errors
}




export const validateFormWithNames = (e, rules) => {

  console.log(rules)
  for (const  key in  rules ){
    if (rules[key].required == 'true' )
  }


}

