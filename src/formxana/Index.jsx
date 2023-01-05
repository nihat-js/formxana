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




export class xana {
  constructor() {
    this.lang = 'en'
    this.default = {}
    this.rule = {}
  }
  start(lang) {
    this.lang = lang || 'en'
    this.rule = {}
    return this
  }

  end() {
    return this.rule
  }

  string(message) {
    this.rule = []
    this.rule.type = 'string'
    this.rule.message = (this.lang === 'en' ? 'Type Should be string' : 'Daxil edilen string olmalidir')
    return this
  }
  number(message) {
    this.rule.type = 'number'
    this.rule.typeMessage = (this.lang === 'en' ? 'Type Should be number' : 'Daxil edilen reqem olmalidir')
    return this
  }
  required(message) {
    this.rule.required = true
    this.rule.requiredMessage = (this.lang === 'en' ? 'Please fill the input' : 'Zehmet olmasa, xanani doldurun')
    return this
  }
  minlength(integer, message) {
    this.rule.minlength = integer
    this.rule.minlengthMessage = (this.lang === 'en' ? `Minimum length is ${minlength}` : `Minimum uzunluq ${integer} `)
    return this
  }

  maxlength(integer, message) {
    this.rule.maxlength = integer
    this.rule.maxlengthMessage = (this.lang === 'en' ? `Maximum length is ${minlength}` : `Maximum simvol uzunlugu  ${integer} `)
    return this 
  }


}

export function validateObject(object, schema) {
  const errors = {}
  for (const key in schema) {
    errors[key] = []
    if (schema[key].required && ( !object[key] || object[key] == '')) {
      errors[key].push(schema[key].requiredMessage)
      continue;
    }
    if (schema[key].minlength && schema[key].minlength > object[key].length ){
      errors[key].push(schema[key].minlengthMessage)
    }
    if (schema[key].maxlength && schema[key].maxlength < object[key].length) {
      errors[key].push(schema[key].maxlengthMessage)
    }
    
  }

  return errors
}

let schema = {
  firstName: new xana().minlength(10).required().end(),
  lastName: new xana().minlength(10).required().end(),
  age: new xana().required().end(),
}

let errors = validateObject({
  firstName: 'nihat',
  lastName: 'abdullazade',
  age: '',
}, schema)

console.log(errors)




export default function Index() {
  return (
    <div>Who ho </div>
  )
}
