// requereds
const fs = require('fs');
// const fs = require('express'); paquetes
// const fs = require('./'); los que creamos nosotros
const arrayResultado = [];
let getTabla = (datosImprimir) => {
    return new Promise((resolve, reject) => {
        //convierto a un array
        datosImprimir = datosImprimir.split(',');
        //  valido si son numeros validos
        console.log(`array: `, datosImprimir);
        datosImprimir.forEach(element => {
            if (isNaN(element)) {
                reject(`Hay un elemento no valido: ${element}`);
                return;
            }
        });

        //recorro la tabla para mostrar la informacion
        for (let i = 0; i < datosImprimir.length; i++) {
            for (let x = 0; x < datosImprimir.length; x++) {
                let result = datosImprimir[i] * datosImprimir[x];
                arrayResultado.push(`${datosImprimir[i]} * ${datosImprimir[x]} = ${result}\n`);
            }
        }
        //Escribo en el archivo
        // ('ruta donde se quiere escribir', datos que se quieren escribir dentro del archito, (error))
        fs.writeFile(`multiplicar/multiplicar.txt`, arrayResultado, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(arrayResultado);
            }
        });
    })
}


let listarTabla = () => {
    return new Promise((resolve, reject) => {

        fs.readFile(`multiplicar/multiplicar.txt`, 'utf-8', (err, data) => {
            if (err) {
                // console.log('error: ', err);
                reject(err);
            } else {
                //console.log(data);
                resolve(data);
            }
        });

    })
}

module.exports = {
    getTabla,
    listarTabla
}