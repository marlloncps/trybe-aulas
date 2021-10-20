// let container = document.querySelector('#cabec');
// let myDiv = document.createElement('div');
// myDiv.className = 'myClass'
// container.appendChild(myDiv)

// Criar o Elemento
// let myLi = document.createElement('li')
// Adicionar atributo para esse elemento
// myLi.className = 'ingredient-item'
// myLi.innerText = 'Feijão cedinha'
// Selecionar o elemento Pai
// let lista = document.querySelector('.ingrediente-list')
// Adicionar o elemento criado como elemento filho do selecionado
// lista.appendChild(myLi)

function createDivFactory(classes, container) {
    let myDivContainer = document.createElement('div');
    myDivContainer.className = classes
    container.appendChild(myDivContainer)
}

function createLiFactory(texto, classe, pai) {
    let myLi = document.createElement('li')
    myLi.className = classe
    myLi.innerText = texto
    pai.appendChild(myLi)
    myLi.style.fontFamily = 'Arial Black'
}

let lista = document.querySelector('.ingrediente-list')


let container = document.querySelector('#cabec');
createDivFactory("myClass", container);

// let i;
// for(i = 0; i < 100; i ++){
//     createLiFactory("vai tomar no cu: " + i, 'ingredient-item', lista)
// }

// let main = document.querySelector('body');
// let test = document.querySelectorAll('section');
// console.log(main)
// console.log(test)
// main.removeChild(test)

// for (let box of test) {
//     main.removeChild(test)
// }
