// rainha
let rLinha = 4
let rColuna = 4
// inimigo
let pLinha = 3
let pColuna = 3
let rainhaVenceu = false

if (rColuna === pColuna){
    // console.log('Rainha pegou o inimigo.')
}else if(rLinha === pLinha){
    rainhaVenceu = true
}

let i;

for( i = 1 ; i < 8;i++ ){
    let diagonalLinhaPeca = rLinha - i;
    let diagonalColunaPeca  = rColuna - i;
    if ((diagonalColunaPeca || diagonalColunaPeca) < 1){
        break;
    }
    console.log('diagonalLinhaPeca: ', diagonalLinhaPeca)
    console.log('diagonalColunaPeca: ', diagonalColunaPeca)
    console.log('-------------')
    if (( pLinha === diagonalLinhaPeca ) && ( pColuna === diagonalColunaPeca )){
        rainhaVenceu = true
    }

}

if(rainhaVenceu === false){
    console.log('Inimigo venceu.')
}else{
    console.log('Rainha venceu.')
}

// 1
///// linha 3 coluna 3

// 2
///// linha 2 coluna 2

// 3
///// linha 1 coluna 1

