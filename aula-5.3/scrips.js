// Método 1

// function hellowTurma(){
//     console.log('Olá turma 17!');
// }

// window.onload = hellowTurma

// Método 2

// window.onload = function() {
    // 1 - Seleciona o elemento no DOM.
    // let btn = document.querySelector('#start-race-btn');
    // 2 - Cria a função desejada
    // function hellowTurma(){
    //     console.log('Olá turma 17!');
    // }
    // 3 - Adicionar um event listener (escutador de eventos) para o meu elemento do DOM
    // btn.addEventListener('click', function() {
    //     console.log('Olá turma 17!');
    // });
// };

window.onload = function(){
    // selecionar os elementos
    let btn = document.querySelector('#start-race-btn');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');
    function zeroMargin(){
        car1.style.marginLeft = '0px'
        car2.style.marginLeft = '0px'    
    }
    zeroMargin();
    let larger = document.querySelector('.car')
    let valueLarger = larger.getBoundingClientRect().width
    console.log(parseInt(car1.style.marginLeft) + valueLarger)
    // adicionar o evento ao elemento
    let myBody = document.querySelector('body')

    let redChampion = document.createElement('h1')
    redChampion.innerHTML = 'Carro vermelho foi campeao'

    let greenChampion = document.createElement('h1')
    greenChampion.innerHTML = 'Carro verde foi campeao'

    btn.addEventListener('click', function() {
        // Botando o carro 1 pra correr
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';

        // Botando o carro 2 pra correr
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

        if(parseInt(car1.style.marginLeft) + valueLarger > window.innerWidth) {
            alert('menstruacao')
            myBody.appendChild(redChampion)
            zeroMargin();
            window.location.reload()
            
        }
        if (parseInt(car2.style.marginLeft) + valueLarger > window.innerWidth){
            alert('maconha')
            myBody.appendChild(greenChampion)
            zeroMargin();
            window.location.reload()
        }

    });

}

