let percent = 10;
let inputBillValue = 0;
let inputpplValue = 1;

function inputBill(value) {
    
    inputBillValue = value;
    console.log(inputBillValue);
    calc();
};

function inputppl(value) {
    console.log(value);
    inputpplValue = value;
    if(inputpplValue ==0) {inputpplValue=1}
    calc();
};

function focusFunc (e) {
    if (e==1) {
        document.querySelector(".bill-amt").classList.add("focus");
    } else {
        document.querySelector(".num-ppl-input").classList.add("focus");
    }
    
console.log(e);
}

function blurFunc (e) {
    if (e==1) {
        document.querySelector(".bill-amt").classList.remove("focus");
    } else {
        document.querySelector(".num-ppl-input").classList.remove("focus");
    }
}





document.querySelectorAll(".button").forEach(function (element) {button(element)}
);
function button(element) {
    element.addEventListener("click", function (e) {
        percent = this.value.slice(0,-1);
        clearClass();
        this.classList.add("focus");
        calc();
    })
}


function clearClass() {
    document.querySelectorAll(".button").forEach(function (element) {
        element.classList.remove("focus")
    })
}



function calc() {
    tipAmt = +((inputBillValue * (percent/100))/inputpplValue).toFixed(2);
    
    totalAmt = +((tipAmt) + inputBillValue/inputpplValue).toFixed(2);
document.querySelector(".tip-amt-num").innerHTML = tipAmt;
document.querySelector(".ttl-prn-num").innerHTML = totalAmt;
}

function reset() {
    document.querySelector("#bill-amt-num").value = "";
    document.querySelector("#num-ppl-num").value = "";
    inputBill(0);
    inputppl(1);
    clearClass();
document.querySelectorAll(".button")[1].classList.add("focus");
}