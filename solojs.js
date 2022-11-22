const output = document.getElementById("home")
const saveel = document.getElementById("guest")
console.log(output)

let count = 0
let temp = 0
function home1() {
    count = count + 1
    output.innerHTML = count
}
function home2() {
    count = count + 2
    output.innerHTML = count
}
function home3() {
    count = count + 3
    output.innerHTML = count
}
function guest1() {
    temp = temp + 1
    saveel.innerText = temp
}
function guest2() {
    temp = temp + 2
    saveel.innerText = temp
}
function guest3() {
    temp = temp + 3
    saveel.innerText = temp
}