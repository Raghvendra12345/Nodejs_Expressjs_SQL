// const students={
//     name:"Ravi",
//      address:{
//         city:"Kolkata",
//         country:"India"
//      }
// }


// const city=students.address.city
// console.log(city)

// const {address:{city:cityName}}=students
// console.log(cityName)

const users=[
    {
        name:"Ravi",
        age:45
    },
    {
        name:"Rajesh",
        age:50
    }
]

// let firstname=users[0].name
// let secondname=users[1].name
// console.log(firstname,secondname)

//destructring
const [{name:fname},{name:sname,age}]=users
console.log(fname,sname,age)