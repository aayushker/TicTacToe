const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

const bp1 = document.getElementById('bp1');
const bp2 = document.getElementById('bp2');
const bp3 = document.getElementById('bp3');
const bp4 = document.getElementById('bp4');
const bp5 = document.getElementById('bp5');
const bp6 = document.getElementById('bp6');
const bp7 = document.getElementById('bp7');
const bp8 = document.getElementById('bp8');
const bp9 = document.getElementById('bp9');

let n = 1;

function main(button){
    const idButton = button.id;
    if (n%2!=0){
        button.innerHTML = "X";
    }
    else{
        button.innerHTML = "O";
    }
    n = n+1;
    check();
}

function check(){
    if ((b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X") || (b1.innerHTML == "O" && b2.innerHTML == "O" && b3.innerHTML == "O")){
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
    }
    if ((b4.innerHTML == "X" && b5.innerHTML == "X" && b6.innerHTML == "X") || (b4.innerHTML == "O" && b5.innerHTML == "O" && b6.innerHTML == "O")){
        b4.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
    }
    if ((b7.innerHTML == "X" && b8.innerHTML == "X" && b9.innerHTML == "X") || (b7.innerHTML == "O" && b8.innerHTML == "O" && b9.innerHTML == "O")){
        b7.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
    }
    if ((b1.innerHTML == "X" && b4.innerHTML == "X" && b7.innerHTML == "X") || (b1.innerHTML == "O" && b4.innerHTML == "O" && b7.innerHTML == "O")){
        b1.style.backgroundColor = "green";
        b4.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
    }
    if ((b2.innerHTML == "X" && b5.innerHTML == "X" && b8.innerHTML == "X") || (b2.innerHTML == "O" && b5.innerHTML == "O" && b8.innerHTML == "O")){
        b2.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
    }
    if ((b3.innerHTML == "X" && b6.innerHTML == "X" && b9.innerHTML == "X") || (b3.innerHTML == "O" && b6.innerHTML == "O" && b9.innerHTML == "O")){
        b3.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
    }
    if ((b1.innerHTML == "X" && b5.innerHTML == "X" && b9.innerHTML == "X") || (b1.innerHTML == "O" && b5.innerHTML == "O" && b9.innerHTML == "O")){ 
        b1.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
    }
    if ((b3.innerHTML == "X" && b5.innerHTML == "X" && b7.innerHTML == "X") || (b3.innerHTML == "O" && b5.innerHTML == "O" && b7.innerHTML == "O")){ 
        b3.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
    }
}

function reset(){
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    b4.innerHTML = "";
    b5.innerHTML = "";
    b6.innerHTML = "";
    b7.innerHTML = "";
    b8.innerHTML = "";
    b9.innerHTML = "";
    n = 1;
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "white";
    b8.style.backgroundColor = "white";
    b9.style.backgroundColor = "white";
}