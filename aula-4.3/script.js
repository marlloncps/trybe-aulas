let n1 = Math.ceil(Math.random() * 60)
let n2 = Math.ceil(Math.random() * 60)
let n3 = Math.ceil(Math.random() * 60)
let n4 = Math.ceil(Math.random() * 60)
let n5 = Math.ceil(Math.random() * 60)
let n6 = Math.ceil(Math.random() * 60)

let megaSenaNumbers = [n1, n2, n3, n4, n5, n6]

let myNumbers = [10, 20, 30, 40, 50, 60]

let i;
let n;
let acertou = false;
let cont = 0;

for (i = 0;i < megaSenaNumbers.length ;i++ ) {

    for (n = 0;n < myNumbers.length ;n++ ) {
        //console.log('retorno', n)
        if(megaSenaNumbers[i] == myNumbers[n]){
            acertou = true;
            cont++
            console.log('Acertou o número: ', megaSenaNumbers[i])
            if(cont == 6){
                console.log('Você acertou todos os numeros da megasena.')
            }
        }
        
    }
    // console.log('----------')
    
}

if (cont == 1){
    console.log('Você só acertou: ' + cont + ' numero.')
}else{
    console.log('Você acertou: ' + cont + ' numeros.')
}
console.log('Numeros:', megaSenaNumbers)
console.log('Meus numeros:', myNumbers)
