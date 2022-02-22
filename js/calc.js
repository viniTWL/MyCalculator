let checkbox = document.getElementById('toogle');
let title = document.querySelector('.title')
let resultBg = document.querySelector('.screen')
let buttonsBg = document.querySelector('.buttons')
let numBg = document.querySelectorAll('.num')               // Selecionando elementos para manipular o estilo
let resetBg = document.querySelectorAll('.reset')
let equalBg = document.querySelector('.equal')
let result = document.querySelector('.result')

let darkMode = () => {

    if (checkbox.checked == false){ // Se o checkbox estiver false, light mode ativado, se não, dark mode ativado
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        title.style.color = 'hsl(60, 10%, 19%)'
        resultBg.style.backgroundColor = 'hsl(0, 0%, 93%)';
        buttonsBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
        equalBg.style.backgroundColor = 'hsl(25, 98%, 40%)';
        result.style.color = 'hsl(60, 10%, 19%)'

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
        result.style.color = 'white'

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

window.onload = function() {
    darkMode() // Ativa o light mode quando a página carrega
}

let insertNum = (number) => {
    let result = document.querySelector('.result').innerText;
    document.querySelector('.result').innerText = result + number; // insere um novo numero além daquele que já está na tela
}

let calc = () => {
    let result = document.querySelector('.result').innerHTML;
    if (result){
       let total = (eval(result)) //faz o calculo de strings que estão em um mesmo elemento, no caso o <p>
       document.querySelector('.result').innerText = total 
    } 
}

let del = () => {
    let result =  document.querySelector('.result').innerHTML
    let delChar = result.slice(0, -1) // o slice pega como primeiro parametro o indice 0 do elemento, e o segundo parametro define a ordem
                                        // que ele irá remover os indices, logo -1, começa pelo ultimo

    document.querySelector('.result').innerText = delChar // insere na tela o valor novo com o ultimo elemento deletado
}

let reset = () => {
    let result =  document.querySelector('.result').innerHTML
    let delChar = result.slice(0, 0) // parecido com a função del(), mas deleta todos os elementos
    document.querySelector('.result').innerText = delChar 
}