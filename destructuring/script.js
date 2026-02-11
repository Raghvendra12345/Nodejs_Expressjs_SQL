// const colors=['blue','red','orange']
// const fcolor=colors[0]
// const scolor=colors[1]
// console.log(fcolor,scolor)


///using destructuring
// const color=['yellow','green','brown','black','white']
// console.log(color)
// console.log("'''''''''''''")

// const [fcolor,scolor]=color
// console.log(fcolor,scolor)


let car={
    'brand':"Ferrari",
    'speed':450
}
// const brand=car.brand
// const speed=car.speed
// console.log(brand,speed)

//using destructuring
// const {brand,speed,color="red"}=car
// console.log(brand,speed,color)
// console.log(car)

// const {brand:brandName,speed:racetospeed}=car
// console.log(brandName,racetospeed)

function detail({brand,speed}){
    console.log(brand,speed)
}
detail(car)