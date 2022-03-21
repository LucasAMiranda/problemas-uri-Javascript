// entrada
let input = require('fs').readFileSync('dev/stdin', 'utf-8'); //adicionar uma barra antes do 'dev' para funcionar no beecrowd

// processamento
let cont_pares = 0;
let cont_impares = 0;
let cont_positivos = 0;
let cont_negativos = 0;

input.split('\n').map(v => {
    let x = parseInt(v);
    if(x % 2 === 0) cont_pares++;
    else cont_impares++;
    if(x > 0) cont_positivos++;
    else if(x < 0) cont_negativos++;
});

// saida
console.log(cont_pares + ' valor(es) par(es)');
console.log(cont_impares + ' valor(es) impar(es)');
console.log(cont_positivos + ' valor(es) positivo(s)');
console.log(cont_negativos + ' valor(es) negativo(s)');