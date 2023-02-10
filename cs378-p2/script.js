const counter_button = document.getElementById("counter");
counter_button.addEventListener('click', increment);
const clear_button = document.getElementById("clear")
clear_button.addEventListener('click', clear);

function increment(option, item, price){
    let id = "";
    if (item === "1") {
        id = "display-1";
    } else if (item === "2") {
        id = "display-2"
    } else if (item === "3") {
        id = "display-3"
    } else if (item === "4") {
        id = "display-4"
    }
    let value = document.getElementById(id);
 
    if (option === '+') {
        value.innerHTML++;

    } else if (option === '-' && value.innerHTML > 0) {
        value.innerHTML--;
    }

    updateSubtotal(option, price);
}

function updateSubtotal(option, price) {
    let cost = document.getElementById("subtotal");
    if (option === '+') {
        cost.innerHTML = +cost.innerHTML + +price;
    } else if (option === '-' && cost.innerHTML > 0) {
        cost.innerHTML = +cost.innerHTML - +price;
    }
}

function clearAll() {
    let temp = document.getElementById("subtotal");
    temp.innerHTML = 0;
    temp = document.getElementById("display-1");
    temp.innerHTML = 0;
    temp = document.getElementById("display-2");
    temp.innerHTML = 0;
    temp = document.getElementById("display-3");
    temp.innerHTML = 0;
    temp = document.getElementById("display-4");
    temp.innerHTML = 0;
}

function order() {
    let txt = "Order Placed!\n";
    if (document.getElementById("display-1").innerHTML > 0) {
        txt = txt + document.getElementById("display-1").innerHTML + " mac & cheese\n"
    }
    if (document.getElementById("display-2").innerHTML > 0) {
        txt = txt + document.getElementById("display-2").innerHTML + " pasta\n"
    }
    if (document.getElementById("display-3").innerHTML > 0) {
        txt = txt + document.getElementById("display-3").innerHTML + " tacos\n"
    }
    if (document.getElementById("display-4").innerHTML > 0) {
        txt = txt + document.getElementById("display-4").innerHTML + " enchilada\n"
    }
    if (txt === "Order Placed!\n") {
        txt = "No items in cart."
    }
    
    
    alert(txt);
    
}