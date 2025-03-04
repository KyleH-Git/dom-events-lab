/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

for(let button of buttons){
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText);
    });
}
/*-------------------------------- Functions --------------------------------*/