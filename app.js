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
            console.log(input)
            console.log(total)
            displayElement.innerText = total / input;
            break;
        case '*':
            displayElement.innerText = input * total;
            break;
        case '-':
            console.log(input)
            console.log(total)
            displayElement.innerText = total - input;
            break;
        case '+':
            displayElement.innerText = input*1 + total*1;
            break;
        default:
            break;
    }
    input = 0;
    total = 0;
    operator = '';
}

const handleOperator = (event) => {
    if(event.target.innerText == 'C'){
        displayElement.innerText = '';
        total = 0;
    }else if(operator == ''){
        operator = event.target.innerText;
        total = input;
        input = 0;
        displayElement.innerText = operator;
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


