// truthy values
const number = 2
if (number) {
    console.log('number is truthy')
}

const text = 'jlsdfg'
if (text) {
    console.log('text is truthy')
}

//empty object - but existing
const car = {}
// will also be truthy
const car1 = { model: 'volvo' }
if (car) {
    console.log('empty object is also truthy')
}

// falsy values
const number1 = 0
if (number1) {
    // will never be printed
    console.log('number is truthy')
} else {
    // will be printed in console
    console.log('number if falsy')
}

const text1 = ''
if (text1) {
    console.log('text is truthy')
} else {
    console.log('text is falsy')
}

let house
if(house) {
    console.log('house var is truthy')
} else {
    console.log('house var is falsy')
}

let firstName = null
if(firstName) {
    console.log('first name is truthy')
} else {
    console.log('first name is falsy')
}

if(!firstName) {
    console.log('first name is falsy')
}


