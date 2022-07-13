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

const display = document.querySelector('#display');
const btns = document.querySelectorAll('.btn');
let a = 0;
let b = 0;
let step = 1;
let operation = 'undefined';

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        let selection = this.textContent;
        console.log(selection);
        if (!isNaN(selection)){
            let selectionN = selection - 0;
            if (step == 1){
                if (a== 0){
                    a = selectionN;
                }
                else{
                    a = a*10 + selectionN;
                }
                display.textContent = a;
            }
            else if (step == 2){
                if (b == 0){
                    b = selectionN;
                }
                else{
                    b = b*10 + selectionN
                }
                display.textContent = b;
            }
        }
        else{
            if (step == 1){
                if (selection == 'Clear'){
                    a = 0;
                    b = 0;
                    display.textContent = a;
                }
                else if (selection != '='){
                    operation = selection;
                    step = 2;
                }
            }
            else{
                if (selection != '='){
                    if (selection == 'Clear'){
                        a = 0;
                        b = 0;
                        display.textContent = 0;
                        step = 1;
                    }
                    else{
                        display.textContent = 'ERROR';
                        a = 0;
                        b = 0;
                        step = 1;
                    }

                }
                else{
                    let result;
                    if (operation == '+'){
                        result = add(a, b);
                    }
                    else if (operation == '-'){
                        result = subtract(a, b);
                    }
                    else if (operation == '/'){
                        result = divide(a, b);
                    }
                    else if (operation == 'Clear'){
                        result = 0;
                    }
                    display.textContent = result;
                    a = 0;
                    b = 0;
                    step = 1;
                }

            }
        }
    });
})






