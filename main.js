import { suma, resta, multiplicar, dividir } from './operaciones.js';

function calculo() {
    const numero1 = parseFloat(document.querySelector('#numero1').value);
    const numero2 = parseFloat(document.querySelector('#numero2').value);
    var operacion=document.querySelector('#operacion').value;
    var resultado;

    switch(operacion){
        case "+":
        resultado= suma(numero1,numero2);
            break;

        case "-":
            resultado=resta(numero1,numero2);
            break;

        case "*":
        resultado= multiplicar(numero1,numero2);
            break;

        case "/":
            resultado=dividir(numero1,numero2);
            break;
    }

    document.querySelector('#resultado').innerHTML="<b>" + resultado + "</b>";
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-outline-primary').addEventListener('click', calculo);
});