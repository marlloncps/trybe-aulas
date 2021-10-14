let n1 = Math.ceil (Math.random() * 60);
let n2 = Math.ceil (Math.random() * 60);
let n3 = Math.ceil (Math.random() * 60);
let n4 = Math.ceil (Math.random() * 60);
let n5 = Math.ceil (Math.random() * 60);
let n6 = Math.ceil (Math.random() * 60);

let megaSenaNumbers = [n1, n2, n3, n4, n5, n6 ];
let myNumbers = [10, 35, 27, 22, 17, 13];

let i;
for(i = 0 ; i < megaSenaNumbers.length ; i++ ){
    if(myNumbers[0] == megaSenaNumbers[i]){
        console.log('Você ganhou na MEGASENA!');
    }else{
        console.log("Você não ganhou na MEGASENA!")
    }

}
console.log(megaSenaNumbers)
console.log(myNumbers)