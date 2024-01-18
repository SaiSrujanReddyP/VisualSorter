let slider1 = document.getElementsByClassName("barWidth")[0]
let bw = slider1.value
slider1.addEventListener("input", () => {
    bw = slider1.value
    // console.log("container width is" + document.body.getElementsByClassName("arr")[0].offsetWidth)
    newArray()
})

let speedArr=[800 , 100 , 50 , 10 , 4]

let slider2 = document.getElementsByClassName("speed")[0]
// let time = slider2.value
let delay =speedArr[slider2.value]
slider2.addEventListener("input" , ()=>{
    delay =speedArr[slider2.value]
})


let arr = []
let elemarr = []

var w = window.innerWidth;
// console.log(w)

w = w - 0.16 * w
// console.log(w)

document.body.onload = () => {
    newArray()
}

//function to generate new array
function newArray() {
    // console.log("this is bw" +bw)
    // console.log("this is w" + w)
    // console.log(window.innerWidth)
    let n = w / ((((4 - (bw * 0.14)) / 100) * window.innerWidth + 4))
    // console.log("this is n" + n)
    // console.log("value px" + (((4 - (bw * 0.14)) / 100) * window.innerWidth))


    elemarr = []
    arr = []
    let y = document.body.getElementsByClassName("arr")[0]
    y.innerHTML = ""
    for (let i = 1; i <= n; i++) {
        let x = document.createElement("div")
        x.style.backgroundColor = "#62CDFF"
        x.classList.add("bar")
        let elem = randomNumber(30, 480)
        arr.push(elem)
        x.style.width = `${4 - (bw * 0.14)}%`
        x.style.height = `${elem}px`
        y.appendChild(x)
        elemarr.push(x)
    }
    // console.log("here is width")
    //     console.log(elemarr[0].offsetWidth)

}


// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


document.getElementsByClassName("new_array")[0].addEventListener("click", () => {
    newArray();
})

let btnArray = document.getElementsByClassName("btn")

function disabler() {
    
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].disabled = true
    }
}
function enabler() {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].disabled = false
    }
}

//Animations
function swap(a, b, color1, color2) {
    return new Promise(resolve => {
        let temp = elemarr[a].style.height
        elemarr[a].style.height = elemarr[b].style.height
        setTimeout(() => {
            elemarr[b].style.height = temp
            elemarr[a].style.backgroundColor = color1
            if (b == a) {
                elemarr[b].style.backgroundColor = color1
            }
            if (color2 != null) {
                elemarr[b].style.backgroundColor = color2
            }
            resolve('resolved');
        }, delay);
    });
}
// function swap(a,b){

//         let temp = elemarr[a].style.height
//         elemarr[a].style.height = elemarr[b].style.height

//         setTimeout(() => {
//             elemarr[b].style.height = temp
//             elemarr[a].style.backgroundColor = "#00FFCA"
//             if (b == elemarr.length - 1 || b==a) {
//                 elemarr[b].style.backgroundColor = "#00FFCA"
//             }
//         }, 500);
// }


function changeColor(a, color ) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (a >= 0 && a <= elemarr.length - 1) {
                elemarr[a].style.backgroundColor = color
            }
            resolve('resolved');
        }, delay);
    });
}
// function changeColor(a, color) {

//         setTimeout(() => {
//             elemarr[a].style.backgroundColor = color
//         }, 500);
// }
function changeHeight(a, height ) {
    return new Promise(resolve => {
        setTimeout(() => {
            elemarr[a].style.height = height
            resolve('resolved');
        }, delay);
    });
}

