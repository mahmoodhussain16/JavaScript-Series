

function myName(){
    console.log("H")
    console.log("o")
    console.log("u")
    console.log("f")
    console.log("y")
    console.log("b")
    
}
// myName()

function addTwoNumbers(number1,number2){
//    let result =number1+number2
//    return result
      return number1+number2
    // after return  not worked
}

const result =addTwoNumbers(3,4)

// console.log("Result:",result);

function logInUserMessage(username){
    return`${username}   just logged in`
}
// console.log(logInUserMessage("Mahmood"))



// ...  rest operator used multiple data
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,4678,400))

const user={
    username:"Mahmood",
    price:200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);

}

// handleObject(user)


handleObject({
    username:"Mahmood",
    price: 500
})



const myNewArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))












