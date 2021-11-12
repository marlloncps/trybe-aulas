const sum = (a, b) => a + b;

module.exports = { sum, summationOf };

function summationOf(value) {
  if (value === '') {
    throw new Error("Precisa de um valor para continuar a função");
  }
//   if(!Number.isNaN(value)){
//     throw new Error("Apenas números são permitidos. MACACO!"); 
//   }
  let total = 0;
  for (let i = 1; i <= value; i++) {
    total = total + i;
  }
  return total;
}
console.log(summationOf("."));
