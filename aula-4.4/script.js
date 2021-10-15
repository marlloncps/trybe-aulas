// array
// let arrNome = [];
// objeto
// let arrObj = {};



let person = {
    firstName : 'Marllon',
    lastName : 'Cesar',
    agePerson : 36,
    canDrive : false,
    favoriteMovies : ['Flash', 'Interstelar', 'Matrix'],
    adress : {
        street: 'Pereira Carneiro',
        number: 305,
    }
};

//console.log(person['firstName'], person['favoriteMovies']); // Notação de colchetes
// console.log(person.firstName); // Notação de ponto

// atualizando objetos
person.agePerson = 25;


// console.log(person.agePerson);


for (let i in person) {
    
    if (i === 'adress'){
        continue;
    }
    console.log(i + " : " + person[i])
}

