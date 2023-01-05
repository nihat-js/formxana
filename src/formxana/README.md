Simple form and validation 

Primary usage

use validate() function to check validation of any  object to your own rules.
Rule attributes 
    
    Required : Array[0]

    required :  [   true || false , 'default error message : required  ' 



  allowedCharacters  : [ [ 'abc'  || 'ABC'  || '123'  ||  'any symbol' ||    ]  ]
  minlength : number
  maxlength : number

 console.log(validate({
    firstName: 'Nihat',
    lastName: 'Abdullazade'
  }, {
 
    // firstName: { required: [true,'Required'], minlength: [3,'Minimum length is 3'], maxlength: [ 35 , ['Too long'], allowedCharacters: [  ['ABC', 'abc', '123', '_', '-'] , 'a' ] },
    // lastName: { required: true, minlength: 3, maxlength: 35, allowedCharacters: ['ABC', 'abc', '123', '_', '-'] }

  }))