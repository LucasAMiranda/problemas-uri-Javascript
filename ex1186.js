// input
let input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n'); // adicione uma barra "/" antes do "dev" para ser aceito no beecrowd

// processing
let operation = input.shift();

let matrice = new Array();

for(let i = 0; i < 12; i++){ // filling the matrice
    matrice.push(new Array());
    for(let j = 0; j < 12; j++){
        matrice[i][j] = parseFloat(input.shift());
    }
}

const operation_below_secondary_diagonal = (mat, op) => {
    let sum = 0;
    let count = 0;
    for(let i = 1; i < 12; i++){
        for(let j = 12 - i; j < 12; j++){
            sum += mat[i][j];
            count++;
        }
    }
    if(op === 'S') return sum;
    else return sum / count;
};

// output
console.log(operation_below_secondary_diagonal(matrice, operation).toFixed(1));