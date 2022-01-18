const body = document.body;

const preparaBigMac = () => {
  setTimeout(() => {
    body.innerHTML = 'Preparando big mac...';
    body.innerHTML = 'Big Mac pronto';
    // console.log("Preparando big mac...");
    // console.log("Big Mac pronto");
  }, 2000);
};
const preparaBigTasty = () => {
  setTimeout(() => {
    body.innerHTML = 'Preparando big tasty...';
    body.innerHTML = 'Big tasty pronto';
    // console.log("Preparando big tasty...");
    // console.log("Big tasty pronto");
  }, 4000);
};

const lanchesProntos = () => {
  setTimeout(() => {
    body.innerHTML = 'Lanches prontos!';
    // console.log("Lanches prontos!");
  }, 5000);
};

body.innerHTML = `Pedido de número 51 realizado com sucesso.
Lanches sendo preparados.`
// console.log("Pedido de número 51 realizado com sucesso.");
// console.log("Lanches sendo preparados.");

lanchesProntos();
preparaBigMac();
preparaBigTasty();
