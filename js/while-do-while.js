const carros = ['Ford', 'Tesla', 'Toyoya'];

let i = 0;

console.warn('While');

while (carros[i]) {
    console.log(carros[i]);
    i++;
}

console.warn('Do While');
let j = 0;
do {
    console.log(carros[j]);
    j++;
}while(carros[j]);