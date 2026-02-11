// let arr=[1,2,3,4]
// let buffervalues=Buffer.from(arr)
// console.log(buffervalues)

// let value="ABC"
// let buffervalues=Buffer.from(value)
// console.log(buffervalues)   //its output is <Buffer 41 42 43>  it is a hexadecimal value

let value="ABC"
let buffervalues=Buffer.from(value)
let value1="XYZ"
let buffervalues1=Buffer.from(value1)
console.log(buffervalues,buffervalues1)

let combinedBuffer=Buffer.concat([buffervalues,buffervalues1])
console.log(combinedBuffer)
console.log(combinedBuffer.toString())
