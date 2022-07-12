function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a *b;
}

function divide(a, b){
    return a/b;
}

function operate(selection, a, b){
    if (selection == 'add'){
        return add(a,b);
    }
    if (selection == 'subtract'){
        return subtract(a,b);
    }
    if (selection == 'multiply'){
        return multiply(a, b);
    }
    if (selection == 'divide'){
        return divide(a, b);
    }
}

