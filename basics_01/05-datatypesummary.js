// # primitive

// 7 types:string,number.boolean,null,undefined,symbol,bigint

const score= 100
const scoreValue =100.3

const isLoggedIn=false


const id =symbol('123')


// refrence (non primitive)


// Array,object,functions

const heros =["mahmood","hamid","sualeh"]
let my= {
      name:"hussain",
    age:24,
}

const myFunction =function(){}
console.log("hello world")  



//******************************************** */

//stack (primitave),Heap(non primitive)

let myyoutubename ="Mahmoodhussainofficial"

let anothername=myyoutubename

anothername="albirzon"

console.log(myyoutubename)
console.log(anothername)

//primitive data type copy changed original baqi in stack


let userOne={
  email:"huss@gmail.com",
  name:"mahmood"

}

let userTwo=userOne

userTwo.email="mah@gail.com"

console.log(userOne)
console.log(userTwo)


//in heap memory non primitive type change in original



 