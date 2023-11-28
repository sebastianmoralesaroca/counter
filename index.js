const number = document.getElementById ("number");
const btnMenos = document.getElementById ("btnMenos");
const btnMas = document.getElementById ("btnMas");
const btnR = document.getElementById ("btnR");


var valor = 0;

btnMenos.addEventListener ("click", () => {
    valor = valor - 1 ;
    number.innerHTML = valor ;
});

btnMas.addEventListener ("click", () => {
    valor = valor + 1 ;
    number.innerHTML = valor ;
});

btnR.addEventListener ("click", () => {
    valor = 0 ;
    number.innerHTML = valor ;
});
