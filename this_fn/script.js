// this.table="hello from this side";
// console.log(window.table)   //it will work on global scope

// let johnsRoom={
//     table:"johns table",
//     cleantable(){
//         console.log(`cleaning ${this.table}`)
//     }
// }
// johnsRoom.cleantable()

// this.garage={
//     table:"garage table",
//     cleantable(){
//         console.log(`cleaning ${this.table}`)
//     }
// }
// this,garage.cleantable()   //work in global scope




// this.table="window table"

// const cleantable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`)
// }
// cleantable.call(this,'some soap')

// this.garage={
//     table:'garage table'
// }
// let johnsRoom={
//     table:"John's Room"
// }
// cleantable.call(this.garage,'some soap')
// cleantable.call(johnsRoom,'some soap')

//using constructor
// const cleantable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`)
// }


// let createRoom=function(name){
//     this.table=`${name}'s table`   //using constructor
// }
// const jillsRoom=new createRoom('jill')
// const johnsRoom=new createRoom('john')
// cleantable.call(johnsRoom,'some soap')
// cleantable.call(jillsRoom,'some soap')


//using prototype
// let createRoom=function(name){
//     this.table=`${name}'s table`   //using constructor
// }
// createRoom.prototype.cleantable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`)
// }
// const jillsRoom=new createRoom('jill')
// const johnsRoom=new createRoom('john')
// jillsRoom.cleantable('some soap')
// johnsRoom.cleantable('some soap')



//using class
class createRoom{
    constructor(name){
        this.table=`${name}s table`
    }
    cleantable(soap){
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}
const jillsRoom=new createRoom('jill')
const johnsRoom=new createRoom('john')
jillsRoom.cleantable('some soap')
johnsRoom.cleantable('some soap')
