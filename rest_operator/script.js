function sum(a,b,c){
    return a+b+c
}
const result=sum(1,3,4)
console.log(result)

function sum1(a,b,c,d){
    return a+b+c+d
}
const result1=sum1(1,3,4,2)
console.log(result1)

//these are ordinary fn. where we have to make new function to add a new number

//rest fn.

// function sum3(...numbers){
//     console.log("numbers=",numbers)
//     let totalsum=0
//     for(let i=0;i<numbers.length;i++){
//         totalsum+=numbers[i]
//     }
//     return totalsum
// }
// const result2=sum3(1,3,4,2,5,6,3,2,42,52,6)
// console.log(result2)



function sum3(num1,num2,...numbers){
    console.log("num1=",num1)
    console.log("num2=",num2)
    console.log("numbers=",numbers)
    let totalsum=0
    for(let i=0;i<numbers.length;i++){
        totalsum+=numbers[i]
    }
    return totalsum
}
const result2=sum3(1,3,4,2,5,6,3,2,42,52,6)
console.log(result2)