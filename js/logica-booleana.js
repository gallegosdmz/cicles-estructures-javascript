const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(!true); //true
console.log(!false); //false

console.log(!regresaFalse());

console.log('And'); // true si todos los valores son verdaderos
console.log(true && true); //  true
console.log(true && false); // false

console.log('=========');
console.log(regresaFalse() && regresaTrue()); // false
console.log('=========');
console.log(regresaTrue() && regresaFalse()); // false

console.warn('OR'); // true
console.log(true || false);
console.log(false || true);

console.log(regresaFalse() || regresaTrue());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo'; // Va a evaluar si los 2 son valores e imprimirá el ultimo
                                 // En caso de que el primer valor fuera false, ahí pararia la validación.
                 



console.log({a1});





