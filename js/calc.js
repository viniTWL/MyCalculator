let checkbox = document.getElementById('toogle');
let title = document.querySelector('.title')
let resultBg = document.querySelector('.result')
let buttonsBg = document.querySelector('.buttons')
let numBg = document.querySelectorAll('.num')
let resetBg = document.querySelectorAll('.reset')
let equalBg = document.querySelector('.equal')

window.onload = function() {
    darkMode()
}

let darkMode = () => {
    if (checkbox.checked == false){

        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        title.style.color = 'hsl(60, 10%, 19%)'
        resultBg.style.backgroundColor = 'hsl(0, 0%, 93%)';
        buttonsBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
        equalBg.style.backgroundColor = 'hsl(25, 98%, 40%)';

        numBg.forEach(element => {
            element.style.backgroundColor = 'hsl(45, 7%, 89%)';
            element.style.color = 'hsl(60, 10%, 19%)';
            element.style["boxShadow"] = '0px 3.5px 2px hsl(35, 11%, 61%)'
        })

        resetBg.forEach(element => {
            element.style.backgroundColor = 'hsl(185, 42%, 37%)';
            element.style["boxShadow"] = '0px 3.5px 2px hsl(35, 11%, 61%)'
        });
    }
    else{
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        title.style.color = 'white'
        resultBg.style.backgroundColor = 'hsl(224, 36%, 15%)';
        buttonsBg.style.backgroundColor = 'hsl(223, 31%, 20%)';
        equalBg.style.backgroundColor = 'hsl(6, 63%, 50%)';

        numBg.forEach(element => {
            element.style.backgroundColor = 'hsl(225, 21%, 49%)';
            element.style.color = 'white';
            element.style["boxShadow"] = '0px 3.5px 2px hsl(224, 28%, 35%)'
        })

        resetBg.forEach(element => {
            element.style.backgroundColor = 'hsl(224, 21%, 31%)';
            element.style["boxShadow"] = '0px 3.5px 2px hsl(224, 28%, 35%)'
            element.style.color = 'white';
        });
    }
}
