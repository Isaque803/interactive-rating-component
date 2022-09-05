let options = document.getElementsByClassName("number")
let submit = document.getElementById("submit")
let cardStart = document.getElementsByClassName("start")[0]
let cardEnd = document.getElementsByClassName("end")[0]
let selected = document.getElementById("selected")
let numberPrevious = ""

function showResult(num){
    if(numberPrevious !== num){
        options[num].classList.toggle("active")
        selected.innerHTML = "You selected "+(num+1)+" of 5"
        checkOtherOptions(num)  
        numberPrevious = num 
    }
}

function checkOtherOptions(number){
    for (i = 0; i < 5; i++){
        if (number != i){
            options[i].className = "icon number"
        }
    }
}

submit.addEventListener("click", function(){
    if (numberPrevious !== ""){
        cardStart.style.display = "none"
        cardEnd.style.display = "block"
    }
})

