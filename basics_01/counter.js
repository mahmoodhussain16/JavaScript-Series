let counter=document.getElementById("count-el")
let count =0
function increment(){
    count=count+1
    counter.innerText=count
}
function decrement(){
    count=count-1
    counter.innerText=count
}
function reset(){
    count =0
    counter.innerText=count
}