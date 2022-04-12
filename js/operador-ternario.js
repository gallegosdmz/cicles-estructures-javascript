/* 
    Dias de la semana abrimos a las 11
    pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si está abierto hoy.

/* const entrar = (hora, dia) => {
    if (dia == 'Sabado' || dia == 'Domingo') {
        if (hora >= 9) {
            console.log('Estamos abiertos FIN DE SEAMANA');
        }else{
            console.log('Estamos cerrados FIN DE SEAMANA');
        }
    }else{
        if (hora >= 11) {
            console.log('Estamos abiertos ENTRE SEMANA')
        }else{
            console.log('Estamos cerrados ENTRE SEMANA')
        }
    }
}

console.log(entrar(8, 'Sabado')); */

const dia = 1;
const horaActual = 10;
let horaApertura;
let mensaje;

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? mensaje = 'Está abierto' : mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});