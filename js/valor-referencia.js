//Los primitivos se pasan por valor

//Los objetos se pasan por referencia

let a = 10;
let b = a;

console.log({a,b});

//Operador spread '...' : separa los elementos
let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({tony});


