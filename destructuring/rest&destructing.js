//rest and destructuring together working one of the best tool in javascript

const details={
    name:"Kenny",
    country:'USA',
    city:"Las Vegas",
    age:20,
    id:4,
    class:10
}
const {name,country,...restofattributes}=details
console.log(name,country,restofattributes)