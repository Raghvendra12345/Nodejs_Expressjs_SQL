const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={...obj1,key1:"value100",key3:"value500"}
console.log(obj2)

const arr1=[{a:1},{b:2},{c:3}]
const arr2=[6,7,8]
const obj={d:4}
console.log(...arr1,...arr2,{...obj})