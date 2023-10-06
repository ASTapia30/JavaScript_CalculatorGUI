

function Sum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function Sub(num1, num2){
    let sub = num1 - num2;
    return sub;
}

function Mul(num1, num2){
    let mul = num1 * num2;
    return mul;
}

function Div(num1, num2){
    let div = num1 / num2;
    return div;
}

let displayed_values = [];
let operators = ["+","-","*","/"]

function Digit(num){
    let display = document.getElementById('display_text')
    if(operators.includes(num)){
        displayed_values.push('<span style="color:red"> ' + num + ' </span>')
    }else {
        displayed_values.push(num);
    }
    let displayText = displayed_values.join("");
    display.innerHTML = displayText;
}

function Clear(){
    let display = document.getElementById('display_text');
    let displayResult = document.getElementById('display_result');
    display.innerHTML = "";
    displayResult.innerHTML = "";
    displayed_values = [];
}

function Undo(){
    let display = document.getElementById('display_text')
    displayed_values.pop();
    let displayText = displayed_values.join("");
    display.innerHTML = displayText;
}

function Calculate(){
    let fullArray = [];
    let displayResult = document.getElementById('display_result');
    let display = document.getElementById('display_text');
    fullArray = display.textContent.split(" ");

    let total = parseFloat(fullArray[0]);

    for (let index = 0; index < fullArray.length; index++) {
        if(fullArray[index] === "+"){
            if(index + 2 <= fullArray.length){
                total = Sum(total,parseFloat(fullArray[index + 1]));
            }
        } 
        if (fullArray[index] === "-"){
            if(index + 2 <= fullArray.length){
                total = Sub(total,parseFloat(fullArray[index + 1]));
            }
        } 
        if(fullArray[index] === "*"){
            if(index + 2 <= fullArray.length){
                total = Mul(total,parseFloat(fullArray[index + 1]));
            }
        } 
        if(fullArray[index] === "/"){
            if(index + 2 <= fullArray.length){
                total = Div(total,parseFloat(fullArray[index + 1]));
            }
        }    
        
    } 
    displayResult.innerHTML = parseFloat(total);  
}