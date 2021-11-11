const person = {
    name : 'marllon',
    lastName : 'cesar'
}

// Acessando posições do objeto.
// const entriesOfPerson = Object.entries(person)
// console.log(entriesOfPerson)
// console.log(entriesOfPerson[0][1])

// Criando nova chave e valor;
// Criando usando o ponto;

// console.log(person);
// let age = 100
// person.age = age;
// console.log(person);

// Criando com os colchetes
person['canPlayPiano'] = false;
console.log(person)

const minhaChaveQualquer = 'escola';
const minhaEscola = 'Trybe';
person[minhaChaveQualquer] = minhaEscola;
console.log(person)