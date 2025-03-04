/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const displayElement = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let input = 0;
let total = 0;
let operator = '';

/*------------------------ Cached Element References ------------------------*/




/*-------------------------------- Functions --------------------------------*/

const handleEquals = (event) => {
    switch(operator){
        case '/':
            displayElement.innerText = input / total;
            break;
        case '*':
            displayElement.innerText = input * total;
            break;
        case '-':
            displayElement.innerText = input - total;
            break;
        case '+':
            displayElement.innerText = input*1 + total*1;
            break;
        default:
            break;

    }
}

const handleOperator = (event) => {
    operator = event.target.innerText;
    console.log(operator)
    total = input;
    input = 0;
    displayElement.innerText = operator;
    if(event.target.innerText == 'C'){
        displayElement.innerText = '';
        total = 0;
    }
}

const handleNumber = (event) => {
    console.log(event.target.innerText)
    if(event.target.innerText !== '0')
        if(input == 0){
            input = event.target.innerText;
            displayElement.innerText = input;
        } else {
        input += event.target.innerText;
        displayElement.innerText = input;
        if(total == 0){
            total = event.target.innerText;
        } else if(operator !== ''){
            if(operator == '+'){
                total += event.target.innerText;
                console.log(total)
            }
            if(operator == '='){
                displayElement.innerText = total;
            }
        }
    }
}


/*----------------------------- Event Listeners -----------------------------*/

for(let button of buttons){
    if(button.classList.contains('number')){
        button.addEventListener('click', handleNumber);
    } else if(button.classList.contains('operator')){
        button.addEventListener('click', handleOperator)
    } else if(button.classList.contains('equals')){
        button.addEventListener('click', handleEquals);
    }
}
